import { useState } from "react";

export default function HouseOwnerMessages() {
  const contacts = [
    {
      id: 1,
      name: "Balaji Infra Projects",
    },
    {
      id: 2,
      name: "Sri Lakshmi Suppliers",
    },
  ];

  const [selectedChat, setSelectedChat] = useState(
    contacts[0]
  );

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "them",
      text: "Foundation work completed.",
    },
    {
      id: 2,
      sender: "me",
      text: "Great, please share photos.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "me",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="bg-white rounded-3xl border overflow-hidden">
      <div className="grid md:grid-cols-4 min-h-[600px]">
        <div className="border-r">
          <h3 className="font-bold p-4">
            Conversations
          </h3>

          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedChat(contact)}
              className={`p-4 cursor-pointer border-b ${
                selectedChat.id === contact.id
                  ? "bg-green-50"
                  : ""
              }`}
            >
              {contact.name}
            </div>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col">
          <div className="border-b p-4 font-bold">
            {selectedChat.name}
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-xs p-3 rounded-xl ${
                  msg.sender === "me"
                    ? "bg-green-600 text-white ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t p-4 flex gap-3">
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Type a message..."
              className="flex-1 border rounded-xl px-4 py-3"
            />

            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-6 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}