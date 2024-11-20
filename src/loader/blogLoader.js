import { api } from "../api/api";

async function categoryLoader() {
    const conn = await api.get("/categories");
    return conn.data;
}

async function allProductsLoader() {


    const conn = await api.get("/products");
    return conn.data;
}

async function allProductsByCategory({params}) {

    
    const conn = await api.get("/products");
    const upDatedData = await conn.data.filter(item => {
        return item.category === params.category;
    })
   console.log(upDatedData);
   
    return upDatedData;
}


async function singleProductDetails({ params }) {


    const conn = await api.get("/products");

    const upDatedData = await conn.data.filter(item => {
        return item.title === params.productName ;
    })
    
    return upDatedData;
}

    


export { categoryLoader, allProductsLoader,allProductsByCategory,singleProductDetails };
