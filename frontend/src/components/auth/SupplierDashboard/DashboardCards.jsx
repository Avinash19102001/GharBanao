const DashboardCards = () => {


    const cards = [

        {
            title: "Requests",
            value: "0"
        },

        {
            title: "Clients Nearby",
            value: "3"
        },

        {
            title: "Products Inventory",
            value: "3"
        },

        {
            title: "Categories Active",
            value: "2"
        },

        {
            title: "Messages",
            value: "MVP"
        }


    ]


    return (

        <div className="
grid
grid-cols-2
lg:grid-cols-5
gap-5
">


            {
                cards.map(card => (

                    <div
                        key={card.title}
                        className="
bg-white
rounded-2xl
shadow
p-5
"
                    >


                        <p className="text-gray-400">

                            {card.title}

                        </p>


                        <h1 className="
text-3xl
font-bold
mt-3
">

                            {card.value}

                        </h1>


                    </div>

                ))

            }


        </div>

    )


}


export default DashboardCards;