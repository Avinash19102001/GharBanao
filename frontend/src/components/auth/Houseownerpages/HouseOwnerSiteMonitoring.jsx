import { useState } from "react";
import { Calendar, Camera, Video, TrendingUp } from "lucide-react";

const siteUpdates = [
  {
    id: 1,
    date: "18 Jun 2026",
    stage: "Foundation Work",
    progress: 25,

    notes: "Foundation excavation completed and PCC work started.",

    photos: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    ],

    videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
  },

  {
    id: 2,
    date: "25 Jun 2026",
    stage: "Column Work",
    progress: 40,

    notes: "Column reinforcement and concrete casting completed.",

    photos: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952"],

    videos: [],
  },

  {
    id: 3,
    date: "02 Jul 2026",
    stage: "Slab Casting",
    progress: 60,

    notes: "Ground floor slab casting completed successfully.",

    photos: ["https://images.unsplash.com/photo-1489515217757-5fd1be406fef"],

    videos: ["https://www.w3schools.com/html/movie.mp4"],
  },
];

export default function HouseOwnerSiteMonitoring() {
  // const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [selectedUpdate, setSelectedUpdate] = useState(
    siteUpdates[siteUpdates.length - 1],
  );

  return (
    <div className="space-y-6">
      {/* Summary */}

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white border rounded-2xl p-5">
          <p className="text-gray-500">Overall Progress</p>

          <h2 className="text-3xl font-bold text-green-600">60%</h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-gray-500">Updates</p>

          <h2 className="text-3xl font-bold">{siteUpdates.length}</h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-gray-500">Photos</p>

          <h2 className="text-3xl font-bold">
            {siteUpdates.reduce((a, b) => a + b.photos.length, 0)}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-gray-500">Videos</p>

          <h2 className="text-3xl font-bold">
            {siteUpdates.reduce((a, b) => a + b.videos.length, 0)}
          </h2>
        </div>
      </div>

      {/* Timeline */}

      <div className="bg-white border rounded-3xl p-6">
        <h2 className="text-3xl font-bold mb-8">
          Construction Progress Timeline
        </h2>

        <div className="space-y-6">
          {siteUpdates.map((update) => (
            <div
              key={update.id}
              onClick={() => setSelectedUpdate(update)}
              className="border rounded-2xl p-5 cursor-pointer hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold">{update.stage}</h3>

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Calendar size={16} />
                    {update.date}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <TrendingUp size={18} className="text-green-600" />

                    <span className="font-bold text-green-600">
                      {update.progress}%
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mt-1">
                    Project Completion
                  </div>
                </div>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-4">
                <div
                  className="h-3 bg-green-600 rounded-full"
                  style={{
                    width: `${update.progress}%`,
                  }}
                />
              </div>

              <div className="flex gap-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Camera size={16} />
                  {update.photos.length} Photos
                </div>

                <div className="flex items-center gap-2">
                  <Video size={16} />
                  {update.videos.length} Videos
                </div>
              </div>

              <p className="mt-4 text-gray-600">{update.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed View */}

      {selectedUpdate && (
        <div className="bg-white border rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">{selectedUpdate.stage}</h2>

          <p className="text-gray-500 mb-6">{selectedUpdate.date}</p>

          <div className="bg-green-50 rounded-2xl p-4 mb-6">
            <p className="font-semibold">
              Progress: {selectedUpdate.progress}%
            </p>

            <p className="mt-2 text-gray-600">{selectedUpdate.notes}</p>
          </div>

          {/* Photos */}

          <h3 className="font-bold text-xl mb-4">Photos</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {selectedUpdate.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt=""
                className="h-56 w-full object-cover rounded-xl"
              />
            ))}
          </div>

          {/* Videos */}

          {selectedUpdate.videos.length > 0 && (
            <>
              <h3 className="font-bold text-xl mt-8 mb-4">Videos</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {selectedUpdate.videos.map((video, index) => (
                  <video key={index} controls className="rounded-xl w-full">
                    <source src={video} type="video/mp4" />
                  </video>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
