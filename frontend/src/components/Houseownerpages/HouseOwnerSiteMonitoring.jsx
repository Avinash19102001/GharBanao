import { useState } from "react";

export default function HouseOwnerSiteMonitoring() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const siteMedia = [
    {
      id: 1,
      type: "image",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      date: "18 Jun 2026",
    },
    {
      id: 2,
      type: "image",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
      date: "17 Jun 2026",
    },
    {
      id: 3,
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      date: "16 Jun 2026",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">Site Monitoring</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {siteMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="cursor-pointer border rounded-xl overflow-hidden"
            >
              {item.type === "image" ? (
                <img src={item.url} className="h-56 w-full object-cover" />
              ) : (
                <video src={item.url} className="h-56 w-full object-cover" />
              )}

              <div className="p-3">
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div className="bg-white border rounded-3xl p-6">
          <h3 className="font-bold mb-4">Media Preview</h3>

          {selectedMedia.type === "image" ? (
            <img src={selectedMedia.url} className="w-full rounded-xl" />
          ) : (
            <video
              src={selectedMedia.url}
              controls
              className="w-full rounded-xl"
            />
          )}
        </div>
      )}
    </div>
  );
}
