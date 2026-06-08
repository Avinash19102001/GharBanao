import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractorCompleteProfileSchema } from "./schemas/contractorCompleteProfileSchema";
import { useState } from "react";

const ContractorCompleteProfile = () => {
  const navigate = useNavigate();

  const [imagePreviews, setImagePreviews] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contractorCompleteProfileSchema),
  });

  const workImages = watch("workImages");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImagePreviews(previews);
  };
  const removeImage = (indexToRemove) => {
    setImagePreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const onSubmit = (data) => {
    console.log(data);

    // API Call Here

    navigate("/contractor/dashboard");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8">Complete Contractor Profile</h2>

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
        {/* Phone Number */}
        <div>
          <input
            {...register("phoneNumber")}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
        </div>
        {/* GST Field */}
        <div>
          <input
            {...register("gstNumber")}
            placeholder="GST Number"
            className="w-full border p-3 rounded-xl"
          />

          <p className="text-red-500 text-sm">{errors.gstNumber?.message}</p>
        </div>
        {/* Company Name */}
        <div>
          <input
            {...register("companyName")}
            placeholder="Company Registered Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.companyName?.message}</p>
        </div>

        {/* PAN */}
        <div>
          <input
            {...register("panNumber")}
            placeholder="PAN Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.panNumber?.message}</p>
        </div>

        {/* Aadhaar Number */}
        <div>
          <input
            {...register("aadhaarNumber")}
            placeholder="Aadhaar Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.aadhaarNumber?.message}
          </p>
        </div>

        {/* Approximate Budget Range */}
        <div>
          <select
            {...register("typicalProjectBudget")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Select Budget Range</option>
            <option value="0-5L">₹0 - ₹5 Lakhs</option>
            <option value="5-20L">₹5 - ₹20 Lakhs</option>
            <option value="20-50L">₹20 - ₹50 Lakhs</option>
            <option value="50L+">₹50 Lakhs+</option>
          </select>

          <p className="text-red-500 text-sm">
            {errors.typicalProjectBudget?.message}
          </p>
        </div>

        {/* Number of Projects */}
        <div>
          <input
            type="number"
            {...register("projectsCompleted")}
            placeholder="Projects Completed"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.projectsCompleted?.message}
          </p>
        </div>

        {/* Years of Experience */}
        <div>
          <input
            type="number"
            {...register("yearsOfExperience")}
            placeholder="Years of Experience"
            className="w-full border p-3 rounded-xl"
          />

          <p className="text-red-500 text-sm">
            {errors.yearsOfExperience?.message}
          </p>
        </div>

        {/* Location */}
        <div>
          <input
            {...register("location")}
            placeholder="Location"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        </div>

        {/* Available For New Projects */}
        <div>
          <select
            {...register("availability")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Availability</option>
            <option value="Available">Available Now</option>
            <option value="Busy">Busy</option>
            <option value="NextMonth">Available Next Month</option>
          </select>
          <p className="text-red-500 text-sm">{errors.availability?.message}</p>
        </div>

        {/* About Contractor */}
        <div>
          <textarea
            {...register("about")}
            rows="4"
            placeholder="Tell homeowners about your experience..."
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.about?.message}</p>
        </div>

        {/* Previous Work Images */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">Previous Work Images</label>

          <label className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
            Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              {...register("workImages")}
              onChange={(e) => {
                register("workImages").onChange(e);
                handleImageChange(e);
              }}
              className="hidden"
            />
          </label>

          {workImages?.length > 0 && (
            <p className="mt-2 text-sm text-green-600">
              {workImages.length} image(s) selected
            </p>
          )}

          <p className="text-red-500 text-sm mt-1">
            {errors.workImages?.message}
          </p>

          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {imagePreviews.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.preview}
                    alt="preview"
                    className="w-full h-32 object-cover rounded-xl border"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certification Upload */}
        <div>
          <label className="block mb-2 font-medium">
            Contractor Certification
          </label>

          <label className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-700 transition">
            Upload Certificate
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("certificate")}
              className="hidden"
            />
          </label>

          <p className="text-red-500 text-sm mt-1">
            {errors.certificate?.message}
          </p>
        </div>

        {/* License Upload */}
        <div>
          <label className="block mb-2 font-medium">Contractor License</label>

          <label className="inline-flex items-center px-5 py-3 bg-purple-600 text-white rounded-xl cursor-pointer hover:bg-purple-700 transition">
            Upload License
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("license")}
              className="hidden"
            />
          </label>

          <p className="text-red-500 text-sm mt-1">{errors.license?.message}</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="md:col-span-2 bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default ContractorCompleteProfile;
