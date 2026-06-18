import RevenueCards from "./RevenueCards";
import RecentOrders from "./RecentOrders";
import LowStockAlert from "./LowStockAlert";
import TopProducts from "./TopProducts";
import Notifications from "./Notifications";


const DashboardHome = () => {


    return (

        <div className="space-y-8">


            <RevenueCards />



            <div className="grid md:grid-cols-2 gap-8">


                <RecentOrders />


                <LowStockAlert />


            </div>




            <TopProducts />



        </div>

    )

}


export default DashboardHome;