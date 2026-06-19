import { useState } from "react";

const ContractorMessages = () => {
  const [selectedChat, setSelectedChat] = useState({
    name: "Amit Verma",
    role: "House Owner",
  });

  const chats = [
    {
      id: 1,
      name: "Amit Verma",
      role: "House Owner",
      lastMessage: "Can you share today's update?",
    },
    {
      id: 2,
      name: "Neha Singh",
      role: "House Owner",
      lastMessage: "Need estimate revision.",
    },
    {
      id: 3,
      name: "UltraTech Cement",
      role: "Supplier",
      lastMessage: "Material delivery tomorrow.",
    },
    {
      id: 4,
      name: "Tata Steel",
      role: "Supplier",
      lastMessage: "Quotation sent.",
    },
  ];

  const messages = [
    {
      sender: "client",
      text: "Can you share today's site progress?",
    },
    {
      sender: "contractor",
      text: "Foundation work completed today.",
    },
    {
      sender: "client",
      text: "Great! Please upload photos.",
    },
  ];

  return (
    <div className="mx-6 mt-6">
      <h2 className="text-3xl font-bold mb-6">Messages</h2>

      <div className="bg-white rounded-3xl shadow overflow-hidden h-[650px] flex">
        {/* LEFT PANEL */}
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border p-3 rounded-xl"
            />
          </div>

          <div className="overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className="p-4 border-b cursor-pointer hover:bg-gray-50"
              >
                <h4 className="font-semibold">{chat.name}</h4>

                <p className="text-xs text-green-600">{chat.role}</p>

                <p className="text-sm text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b p-4">
            <h3 className="font-bold text-lg">{selectedChat.name}</h3>

            <p className="text-sm text-gray-500">{selectedChat.role}</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.sender === "contractor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.sender === "contractor"
                      ? "bg-green-600 text-white"
                      : "bg-white shadow"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4 flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border p-3 rounded-xl"
            />

            <button className="bg-green-600 text-white px-6 rounded-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorMessages;
