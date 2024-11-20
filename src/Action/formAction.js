import { redirect } from "react-router-dom";
import { api } from "../api/api";

async function createProduct({request, params}) {
    const formData = await request.formData();
    const upDateFormData = Object.fromEntries(formData);
    console.log(upDateFormData);
    api.post("/products", upDateFormData);
    return redirect('/')
}

export {createProduct}