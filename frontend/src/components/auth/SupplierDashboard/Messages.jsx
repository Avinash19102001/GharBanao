import { useState } from "react";


const Messages = () => {


    const [selectedClient, setSelectedClient] = useState(null);

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    const clients = [

        {
            id: 1,
            name: "Dream Homes",
            type: "Home Owner",
            messages: [
                "Need 200 cement bags urgently."
            ]
        },
        {
            id: 2,
            name: "ABC Builders",
            type: "Contractor",
            messages: [
                "Please share quotation for steel rods."
            ]
        }

    ];
    const sendMessage = () => {


        if (!message.trim()) {

            setError("Message cannot be empty");

            return;

        }
        if (message.length < 5) {

            setError("Message must contain minimum 5 characters");

            return;

        }

        if (message.length > 200) {

            setError("Message should not exceed 200 characters");

            return;

        }
        setError("");

        console.log("Sent:", message);
        setMessage("");

    };
    return (
        <div className="bg-white rounded-3xl shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-8">
                Messages
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
                {/* CLIENT LIST */}
                <div className="border rounded-2xl p-4">
                    {
                        clients.map(client => (


                            <button

                                key={client.id}

                                onClick={() => setSelectedClient(client)}

                                className="
                        w-full
                        text-left
                        p-4
                        rounded-xl
                        hover:bg-blue-50
                        "
                            >
                                <h2 className="font-bold">

                                    {client.name}

                                </h2>


                                <p className="text-gray-500 text-sm">

                                    {client.type}

                                </p>


                            </button>


                        ))
                    }
                </div>
                {/* CHAT AREA */}


                <div className="md:col-span-2 border rounded-2xl p-5">



                    {

                        selectedClient ?

                            <>
                                <h2 className="font-bold text-xl mb-5">

                                    {selectedClient.name}

                                </h2>
                                <div className="h-72 overflow-y-auto space-y-3">


                                    {
                                        selectedClient.messages.map((msg, index) => (


                                            <div

                                                key={index}

                                                className="
                            bg-blue-100
                            p-3
                            rounded-2xl
                            w-fit
                            "
                                            >

                                                {msg}

                                            </div>


                                        ))
                                    }


                                </div>

                                {/* INPUT */}
                                <div className="mt-5">
                                    <textarea

                                        value={message}

                                        onChange={(e) => {

                                            setMessage(e.target.value)

                                            setError("")

                                        }}

                                        placeholder="Type your message..."

                                        className="
                        border
                        rounded-xl
                        w-full
                        p-3
                        "/>
                                    {
                                        error &&

                                        <p className="text-red-500 text-sm mt-2">

                                            {error}

                                        </p>

                                    }
                                    <button

                                        onClick={sendMessage}

                                        className="
                        mt-3
                        bg-blue-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        "
                                    >

                                        Send Message

                                    </button>
                                </div>
                            </>
                            :
                            <div className="h-full flex items-center justify-center text-gray-400">

                                Select client to start chat

                            </div>
                    }
                </div>
            </div>
        </div>

    );

};
export default Messages;