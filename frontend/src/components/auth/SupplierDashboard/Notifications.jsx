const Notifications = () => {


    const notifications = [

        "New order received",

        "Low stock alert: Cement",

        "Client request accepted"

    ];


    return (

        <div className="bg-white rounded-3xl shadow p-6">


            <h2 className="text-xl font-bold">

                Notifications

            </h2>


            {
                notifications.map((item, index) => (


                    <div

                        key={index}

                        className="border-b py-3"

                    >

                        🔔 {item}

                    </div>


                ))

            }


        </div>

    )

}


export default Notifications;