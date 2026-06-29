const Requests = () => {

    return (

        <div className="
bg-white
rounded-xl
p-5
shadow-sm
">

            <h2 className="text-xl font-bold">
                Incoming Requests
            </h2>


            <div className="
mt-4
grid
md:grid-cols-3
gap-4
">


                <Card
                    title="New Requests"
                    value="0"
                />


                <Card
                    title="Pending"
                    value="0"
                />


                <Card
                    title="Completed"
                    value="0"
                />


            </div>


        </div>

    )

}


const Card = ({ title, value }) => (

    <div className="
bg-gray-50
rounded-xl
p-4
">

        <p className="text-gray-400">
            {title}
        </p>

        <h1 className="
text-3xl
font-bold
mt-2
">
            {value}
        </h1>

    </div>

)


export default Requests;