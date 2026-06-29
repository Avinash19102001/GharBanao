const HeroSection = () => {


    return (

        <div className="
bg-[#064e3b]
rounded-3xl
p-8
text-white
flex
justify-between
items-center
">


            <div>


                <h1 className="
text-4xl
font-bold
">

                    Welcome back, Supplier!

                </h1>


                <p className="
mt-3
text-green-100
">

                    Automate product listings, manage buyers and grow your business.

                </p>


                <button className="
mt-6
bg-white
text-green-800
px-6
py-3
rounded-xl
font-semibold
">

                    Manage My Catalog

                </button>


            </div>



            <div className="
bg-green-900
rounded-2xl
p-5
">


                <h2 className="text-xl font-bold">

                    UdayStores

                </h2>


                <p>
                    Official Supplier
                </p>


            </div>


        </div>

    )


}


export default HeroSection;