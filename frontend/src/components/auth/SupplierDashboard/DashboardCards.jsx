import { products } from "./SupplierData";



const Card = ({ title, value, desc, type }) => {


    return (

        <div className="bg-white rounded-3xl shadow p-6">


            <h3 className="text-gray-500">

                {title}

            </h3>


            <h1

                className={`text-4xl font-bold mt-3

${type === "danger" ? "text-red-500" : ""}

`}

            >

                {value}

            </h1>


            <p className="mt-2 text-green-600">

                {desc}

            </p>


        </div>

    )

}



const DashboardCards = () => {


    const totalProducts = products.length;


    const lowStock = products.filter(

        item => item.stock < 20

    ).length;




    return (

        <div className="grid md:grid-cols-4 gap-6 mt-8">


            <Card

                title="Total Products"

                value={totalProducts}

                desc="Active Listings"

            />



            <Card

                title="Orders"

                value="45"

                desc="In Progress"

            />



            <Card

                title="Today's Sales"

                value="₹1.2L"

                desc="+12.5%"

            />



            <Card

                title="Low Stock"

                value={lowStock}

                desc="Need Attention"

                type="danger"

            />



        </div>

    )


}


export default DashboardCards;