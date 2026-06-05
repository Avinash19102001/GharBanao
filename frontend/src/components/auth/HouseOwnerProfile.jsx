import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileSchema } from "./schemas/ProfileSchema";
import { useState } from "react";

const HouseOwnerProfile = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setMediaFiles((prev) => [...prev, ...previews]);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Complete Your Profile
          </h1>
          <p className="text-gray-500 mt-2">
            Please provide your details to continue.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* First Name */}
          <div>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>

          {/* Last Name */}
          <div>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
          </div>

          {/* Mobile Number */}
          <div>
            <input
              {...register("mobileNumber")}
              placeholder="Mobile Number"
              maxLength={10}
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">
              {errors.mobileNumber?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <textarea
              {...register("address")}
              rows={4}
              placeholder="Address"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.address?.message}</p>
          </div>

          {/* Pincode */}
          <div>
            <input
              {...register("pincode")}
              maxLength={6}
              placeholder="Pincode"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.pincode?.message}</p>
          </div>

          {/* State */}
          <div>
            <input
              {...register("state")}
              placeholder="State"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.state?.message}</p>
          </div>

          {/* City */}
          <div>
            <input
              {...register("city")}
              placeholder="City"
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.city?.message}</p>
          </div>

          {/* Gender */}
          <div>
            <select
              {...register("gender")}
              className="w-full border p-3 rounded-xl"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
          </div>

          {/* DOB */}
          <div>
            <input
              type="date"
              {...register("dob")}
              className="w-full border p-3 rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.dob?.message}</p>
          </div>

          {/* Property Type */}
          <div>
            <select
              {...register("propertyType")}
              className="w-full border p-3 rounded-xl"
            >
              <option value="">Property Type</option>
              <option value="Independent House">Independent House</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
            </select>
            <p className="text-red-500 text-sm">
              {errors.propertyType?.message}
            </p>
          </div>

          {/* Project Type */}
          <div>
            <select
              {...register("projectType")}
              className="w-full border p-3 rounded-xl"
            >
              <option value="">Project Type</option>
              <option value="New Construction">New Construction</option>
              <option value="Renovation">Renovation</option>
              <option value="Interior Design">Interior Design</option>
            </select>
            <p className="text-red-500 text-sm">
              {errors.projectType?.message}
            </p>
          </div>

          {/* Profile Image */}
          <div className="md:col-span-2">
            <label
              htmlFor="mediaUpload"
              className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition"
            >
              <span className="text-gray-500">Upload Images / Videos</span>

              <span className="text-sm text-gray-400 mt-2">
                JPG, PNG, MP4, MOV
              </span>
            </label>

            <input
              id="mediaUpload"
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {mediaFiles.length > 0 && (
            <div className="md:col-span-2">
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-4">
                {" "}
                {mediaFiles.map((item, index) => (
                  <div
                    key={index}
                    className="relative border rounded-lg overflow-hidden shadow-sm"
                  >
                    {item.type.startsWith("image") ? (
                      <img
                        src={item.url}
                        alt=""
                        className="w-full h-28  object-cover"
                      />
                    ) : (
                      <video
                        src={item.url}
                        controls
                        className="w-full h-28 object-cover"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setMediaFiles(mediaFiles.filter((_, i) => i !== index))
                      }
                      className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default HouseOwnerProfile;
