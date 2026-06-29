import {
    FaBox,
    FaUsers,
    FaShoppingCart,
    FaChartLine
} from "react-icons/fa";


const DashboardHome = () => {


    return (

        <div className="space-y-6">



            {/* Welcome */}


            <div className="
bg-[#064e3b]
rounded-3xl
p-8
text-white
">


                <h1 className="
text-3xl
font-bold
">

                    Welcome Back, Supplier 👋

                </h1>


                <p className="
mt-2
text-green-100
">

                    Manage your products, orders and customers from here.

                </p>


            </div>







            {/* Quick Stats */}



            <div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
">



                <StatCard

                    icon={<FaBox />}

                    title="Total Products"

                    value="120"

                />



                <StatCard

                    icon={<FaUsers />}

                    title="Active Clients"

                    value="45"

                />



                <StatCard

                    icon={<FaShoppingCart />}

                    title="Orders"

                    value="24"

                />



            </div>







            {/* Main panels */}



            <div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
">






                <div className="
bg-white
rounded-3xl
p-6
shadow
">


                    <h2 className="
text-xl
font-bold
mb-5
">

                        Recent Orders

                    </h2>



                    <div className="
space-y-4
">



                        <OrderItem
                            name="Rajesh Constructions"
                            item="Cement 50 Bags"
                            status="Pending"
                        />



                        <OrderItem
                            name="ABC Builders"
                            item="Steel Rods"
                            status="Completed"
                        />



                        <OrderItem
                            name="Sri Homes"
                            item="Tiles"
                            status="Processing"
                        />



                    </div>


                </div>









                <div className="
bg-white
rounded-3xl
p-6
shadow
">


                    <h2 className="
text-xl
font-bold
mb-5
">

                        Business Overview

                    </h2>



                    <div className="
h-40
bg-gray-100
rounded-2xl
flex
items-center
justify-center
">


                        <FaChartLine
                            className="
text-5xl
text-green-700
"
                        />


                    </div>



                </div>





            </div>





        </div>


    )

}








const StatCard = ({
    icon,
    title,
    value
}) => (

    <div className="
bg-white
rounded-3xl
p-6
shadow
">


        <div className="
text-green-700
text-3xl
">

            {icon}

        </div>



        <p className="
text-gray-500
mt-3
">

            {title}

        </p>



        <h1 className="
text-3xl
font-bold
">

            {value}

        </h1>


    </div>

)







const OrderItem = ({
    name,
    item,
    status
}) => (


    <div className="
border
rounded-xl
p-4
flex
justify-between
items-center
">


        <div>

            <p className="font-semibold">

                {name}

            </p>


            <p className="text-sm text-gray-500">

                {item}

            </p>


        </div>



        <span className="
bg-green-100
text-green-800
px-3
py-1
rounded-full
text-sm
">

            {status}

        </span>



    </div>


)



export default DashboardHome;