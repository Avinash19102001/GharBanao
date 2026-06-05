import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileSchema } from "./auth/schemas/ProfileSchema";

const HouseProfileCompletion = () => {
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
  return (
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
        <p className="text-red-500 text-sm">{errors.mobileNumber?.message}</p>
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
        <p className="text-red-500 text-sm">{errors.propertyType?.message}</p>
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
        <p className="text-red-500 text-sm">{errors.projectType?.message}</p>
      </div>

      {/* Profile Image */}
      <div className="md:col-span-2">
        <input
          type="file"
          accept="image/*"
          className="w-full border p-3 rounded-xl"
        />
      </div>

      <button
        type="submit"
        className="
      md:col-span-2
      bg-blue-600
      text-white
      py-3
      rounded-xl
      hover:bg-blue-700
    "
      >
        Complete Profile
      </button>
    </form>
  );
};

export default HouseProfileCompletion;
