import { useState } from "react";

import Requests from "./Requests";
import Clients from "./Clients";
import Products from "./Products";
import Messages from "./Messages";
import Analytics from "./Analytics";

import {
    FaBell,
    FaBox,
    FaUsers,
    FaEnvelope,
    FaChartBar,
    FaComment
} from "react-icons/fa";


const SupplierDashboard = () => {


    const [active, setActive] = useState("requests");



    const menu = [

        {
            id: "requests",
            name: "Requests",
            icon: <FaEnvelope />
        },

        {
            id: "clients",
            name: "Clients",
            icon: <FaUsers />
        },

        {
            id: "products",
            name: "Products",
            icon: <FaBox />
        },

        {
            id: "messages",
            name: "Messages",
            icon: <FaComment />
        },

        {
            id: "statistics",
            name: "Statistics",
            icon: <FaChartBar />
        }

    ];

    const pages = {

        requests:
            <Requests />,


        clients:
            <Clients />,


        products:
            <Products />,


        messages:
            <Messages />,


        statistics:
            <Analytics />

    };

    return (

        <div className="
min-h-screen
bg-[#f7f5ef]
px-4
py-3
">


            {/* HEADER */}

            <div className="
bg-white
rounded-2xl
shadow-sm
px-5
py-3
flex
justify-between
items-center
">


                <div>

                    <h1 className="
text-2xl
font-bold
text-green-900
">
                        GHARBANAO
                    </h1>

                    <p className="text-xs text-gray-400">
                        PLAN. BUILD. LIVE. FOREVER.
                    </p>


                </div>



                <input

                    placeholder="Search requests, projects or clients"

                    className="
hidden
md:block
w-[40%]
border
rounded-xl
px-5
py-3
outline-none
"

                />



                <div className="
flex
items-center
gap-5
">


                    <button className="
w-10
h-10
rounded-full
border
">

                        <FaBell />

                    </button>



                    <div>

                        <p className="font-bold">
                            Uday
                        </p>

                        <p className="text-sm text-gray-500">
                            Supplier
                        </p>

                    </div>


                    <button className="
bg-green-700
text-white
px-5
py-2
rounded-xl
">

                        Logout

                    </button>


                </div>


            </div>

            {/* HERO SECTION */}

            <div className="
mt-4
bg-[#00563f]
rounded-3xl
px-8
py-8
text-white
">


                <h1 className="
text-4xl
font-bold
">

                    Welcome back, Uday!

                </h1>


                <p className="
mt-3
text-green-100
max-w-3xl
">

                    Automate product listings, manage nearby buyer leads,
                    respond to quote requests and manage your material catalog.

                </p>


                <button className="
mt-5
bg-white
text-green-900
px-6
py-3
rounded-xl
font-semibold
">

                    📦 Manage My Catalog

                </button>


            </div>

            {/* NAVBAR */}


            <div className="
mt-4
flex
justify-center
">
                <div className="
bg-white
rounded-full
px-3
py-2
shadow-sm
flex
gap-2
">


                    {
                        menu.map(item => (


                            <button

                                key={item.id}

                                onClick={() => setActive(item.id)}

                                className={`
px-5
py-2
rounded-xl
flex
items-center
gap-2
font-medium
whitespace-nowrap
transition-all
duration-200

${active === item.id

                                        ?

                                        "bg-[#00563f] text-white"

                                        :

                                        "text-gray-700 hover:bg-gray-100"

                                    }

`}

                            >


                                {item.icon}

                                {item.name}


                            </button>


                        ))
                    }


                </div>
            </div>

            {/* CONTENT */}



            <div className="
mt-4
">
                {
                    pages[active]
                }
            </div>





        </div>


    )

}


export default SupplierDashboard;