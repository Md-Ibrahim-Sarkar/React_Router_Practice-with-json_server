
import Sidebar from "./Sidebar";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";


export default function Root() {
    const categories = useLoaderData();
    const navigate = useNavigation()
   
    return (
        <div className="bg-slate-100 p-6 max-w-screen-2xl mx-auto grid grid-cols-12 gap-4 dark:bg-black dark:text-white">
            <Sidebar categories={categories} />
           {navigate.state === 'loading'? <div>logding data</div>:  <Outlet  />}
        </div>
    );
}
