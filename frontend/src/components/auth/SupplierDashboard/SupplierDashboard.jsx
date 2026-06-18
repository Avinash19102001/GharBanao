import { useState } from "react";

import DashboardCards from "./DashboardCards";
import DashboardHome from "./DashboardHome";

import Requests from "./Requests";
import FindClients from "./FindClients";
import Orders from "./Orders";
import AddProducts from "./AddProducts";
import DailyStockUpdates from "./DailyStockUpdates";

import Analytics from "./Analytics";
import Messages from "./Messages";
import Settings from "./Settings";

import Profile from "./Profile";
import Notifications from "./Notifications";


const SupplierDashboard = () => {


    const [activeTab, setActiveTab] = useState("dashboard");

    const [profile, setProfile] = useState(false);

    const [notify, setNotify] = useState(false);



    const menu = [

        {
            id: "dashboard",
            label: "Dashboard"
        },

        {
            id: "requests",
            label: "Requests"
        },

        {
            id: "clients",
            label: "Find Clients"
        },

        {
            id: "orders",
            label: "Orders"
        },

        {
            id: "products",
            label: "Add Product"
        },

        {
            id: "stock",
            label: "Stock Update"
        },

        {
            id: "analytics",
            label: "Analytics"
        },

        {
            id: "messages",
            label: "Messages"
        },

        {
            id: "settings",
            label: "Settings"
        }


    ];




    const content = {


        dashboard: <DashboardHome />,

        requests: <Requests />,

        clients: <FindClients />,

        orders: <Orders />,

        products: <AddProducts />,

        stock: <DailyStockUpdates />,

        analytics: <Analytics />,

        messages: <Messages />,

        settings: <Settings />


    };



    return (
        <div className="min-h-screen bg-[#f6f7fb] p-8">

            {/* HEADER */}


            <div className="bg-white rounded-3xl shadow-md px-8 py-5 flex justify-between items-centerborderborder-gray-100"> <div>


                <h1 className="text-3xl font-bold">

                    GharBanao

                </h1>


                <p className="text-gray-500">

                    Supplier Management Portal

                </p>


            </div>

                <div className="flex items-center gap-5">

                    {/* notification */}
                    <div className="relative">
                        <button

                            onClick={() => setNotify(!notify)}

                            className="relative bg-gray-100 w-12 h-12 rounded-full text-xl"

                        >

                            🔔


                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">

                                3

                            </span>


                        </button>

                        {

                            notify &&

                            <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl p-4 z-50">

                                <Notifications />
                                

                            </div>

                        }


                    </div>

                    {/* profile */}

                    <button

                        onClick={() => setProfile(true)}

                        className="
flex 
items-center 
gap-3 
bg-gray-50
hover:bg-gray-100
px-5
py-3
rounded-2xl
transition
" >

                        <img

                            src="https://i.pravatar.cc/100"

                            className="w-10 h-10 rounded-full"

                        />


                        <div className="text-left">


                            <p className="font-bold">

                                Supplier

                            </p>


                            <p className="text-xs text-gray-500">

                                View Profile

                            </p>


                        </div>


                    </button>



                </div>



            </div>

            {/* CARDS */}



            {

                activeTab === "dashboard"

                &&

                <DashboardCards />

            }

            {/* NAVIGATION */}

            <div className="mt-8 bg-white rounded-3xl shadow-md p-4">

                <div className="grid grid-cols-9 gap-3">


                    {
                        menu.map(item => (

                            <button

                                key={item.id}

                                onClick={() => setActiveTab(item.id)}

                                className={`
                    
                    h-12 rounded-xl font-medium transition-all duration-300

                    ${activeTab === item.id

                                        ?

                                        "bg-blue-600 text-white shadow-lg"

                                        :

                                        "bg-gray-50 text-gray-600 hover:bg-blue-100 hover:text-blue-600"

                                    }

                    `}

                            >

                                {item.label}

                            </button>


                        ))
                    }


                </div>


            </div>

            {/* PAGE */}



            <div className="mt-8">


                {content[activeTab]}


            </div>

            {/* PROFILE MODAL */}

            {

                profile &&


                <div className="
fixed 
inset-0 
bg-black/30 
backdrop-blur-sm
flex 
items-center 
justify-center 
z-50
">
                    <div className="w-[90%] max-w-5xl">


                        <button

                            onClick={() => setProfile(false)}

                            className="float-right bg-red-500 text-white px-4 py-2 rounded-xl"

                        >

                            Close

                        </button>


                        <Profile />


                    </div>


                </div>


            }
        </div>
    )

}
export default SupplierDashboard;