import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SupplierProfile } from "./schemas/SupplierProfile";
import { supplierCompleteProfile } from "../../services/authServices";

const SupplierCompleteProfile = () => {
  const navigate = useNavigate();

  const [imagePreviews, setImagePreviews] = useState([]);

  const [location, setLocation] = useState({
    city: "",
    state: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SupplierProfile),
  });

  const handleImageChange = (e) => {

    const selectedFiles = Array.from(e.target.files);


    setImagePreviews((prev) => [

      ...prev,
      ...selectedFiles

    ]);

  };

  const removeImage = (indexToRemove) => {
    setImagePreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const fetchLocationFromPincode = async (pincode) => {
    if (pincode.length !== 6) return;

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      const data = await response.json();

      if (
        data[0].Status === "Success" &&
        data[0].PostOffice.length > 0
      ) {
        const city = data[0].PostOffice[0].District;
        const state = data[0].PostOffice[0].State;

        setLocation({
          city,
          state,
        });

        setValue("city", city);
        setValue("state", state);
      }
    } catch (error) {
      console.error("Pincode lookup failed", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("first_name", data.firstName);
      formData.append("last_name", data.lastName);
      formData.append("phone_number", data.phoneNumber);
      formData.append("company_registered_name", data.companyName);
      formData.append("gst_number", data.gstNumber);
      formData.append("category", data.supplierCategory);
      formData.append("business_address", data.businessAddress);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("pincode", data.pincode);
      formData.append("years_of_experience", data.experience);

      // Product Images
      if (data.productImages) {
        Array.from(data.productImages).forEach((file) => {
          formData.append("product_images", file);
        });
      }

      // GST Certificate
      if (data.gstCertificate?.[0]) {
        formData.append(
          "gst_certificate",
          data.gstCertificate[0]
        );
      }

      // Company Registration Certificate
      if (data.registrationCertificate?.[0]) {
        formData.append(
          "company_registration_certificate",
          data.registrationCertificate[0]
        );
      }

      const response = await supplierCompleteProfile(formData);

      console.log("Profile Created:", response.data);

      navigate("/supplier/dashboard");
    } catch (error) {
      console.error(
        "Profile Creation Failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8">
        Complete Supplier Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* First Name */}
        <div>
          <input
            {...register("firstName")}
            placeholder="First Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName?.message}
          </p>
        </div>

        {/* Last Name */}
        <div>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.lastName?.message}
          </p>
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phoneNumber")}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber?.message}
          </p>
        </div>

        {/* Company */}
        <div>
          <input
            {...register("companyName")}
            placeholder="Company Registered Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.companyName?.message}
          </p>
        </div>

        {/* GST */}
        <div>
          <input
            {...register("gstNumber")}
            placeholder="GST Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.gstNumber?.message}
          </p>
        </div>

        {/* Category */}
        <div>
          <select
            {...register("supplierCategory")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Select Category</option>
            <option value="Cement">Cement</option>
            <option value="Steel">Steel</option>
            <option value="Bricks">Bricks</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Paints">Paints</option>
            <option value="Tiles">Tiles</option>
            <option value="Hardware">Hardware</option>
          </select>
          <p className="text-red-500 text-sm mt-1">
            {errors.supplierCategory?.message}
          </p>
        </div>

        {/* Address Full Width */}
        <div className="md:col-span-2">
          <textarea
            {...register("businessAddress")}
            placeholder="Business Address"
            rows={2}
            className="w-full border p-3 rounded-xl resize-none"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.businessAddress?.message}
          </p>
        </div>

        {/* City */}
        <div>
          <input
            {...register("city")}
            value={location.city}
            readOnly
            placeholder="City"
            className="w-full border p-3 rounded-xl bg-gray-100"
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.city?.message}
          </p>
        </div>

        {/* State */}
        <div>
          <select
            {...register("state")}
            value={location.state}
            onChange={(e) => {
              setLocation((prev) => ({
                ...prev,
                state: e.target.value,
              }));

              setValue("state", e.target.value);
            }}
            className="w-full border p-3 rounded-xl bg-white"
          >
            <option value="">Select State</option>

            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>

            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>


          <p className="text-red-500 text-sm mt-1">
            {errors.state?.message}
          </p>
        </div>
        {/* Pincode */}
        <div>
          <input
            {...register("pincode")}
            placeholder="Pincode"
            className="w-full border p-3 rounded-xl"
            onChange={(e) => {
              register("pincode").onChange(e);
              fetchLocationFromPincode(e.target.value);
            }}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.pincode?.message}
          </p>
        </div>

        {/* Experience */}
        <div>
          <input
            type="number"
            {...register("experience")}
            placeholder="Years of Experience"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.experience?.message}
          </p>
        </div>

        {/* Experience */}
        <div className="md:col-span-2">
          <label className="block text-lg font-semibold mb-3">
            Product Images
          </label>

          {imagePreviews.length > 0 && (
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">

          <div className="text-center">

            <div className="text-5xl mb-2">
              📷
            </div>

            <p className="font-medium text-gray-700">
              Click to upload product images
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Maximum 5 images (JPG, PNG)
            </p>

          </div>


          <input

            type="file"

            multiple

            accept="image/png, image/jpeg, image/jpg"

            {...register("productImages", {

              onChange: (e) => {

                handleImageChange(e);

              }

            })}

            className="hidden"

          />

        </label>


        {/* Validation Error */}

        {
          errors.productImages && (

            <p className="text-red-500 text-sm mt-2">

              {errors.productImages.message}

            </p>

          )
        }
        {/* Certificates */}
        {/* GST Certificate */}
        <div>
          <label className="block text-base font-semibold mb-3">
            GST Certificate
          </label>

          <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition">
            <div className="text-center">
              <div className="text-4xl mb-2">📄</div>
              <p className="text-sm font-medium">
                Upload GST Certificate
              </p>
              <p className="text-xs text-gray-500">
                PDF, JPG, PNG
              </p>
            </div>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("gstCertificate")}
              className="hidden"
            />
          </label>
        </div>

        {/* Registration Certificate */}
        <div>
          <label className="block text-base font-semibold mb-3">
            Company Registration Certificate
          </label>

          <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
            <div className="text-center">
              <div className="text-4xl mb-2">🏢</div>
              <p className="text-sm font-medium">
                Upload Registration Certificate
              </p>
              <p className="text-xs text-gray-500">
                PDF, JPG, PNG
              </p>
            </div>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("registrationCertificate")}
              className="hidden"
            />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Submit Profile
        </button>
      </form >
    </div >
  );
};
export default SupplierCompleteProfile;