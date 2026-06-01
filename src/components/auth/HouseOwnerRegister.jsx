import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { houseOwnerSchema } from "./schemas/houseOwnerSchema";

const HouseOwnerRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(houseOwnerSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    // await registerHouseOwner(data);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        House Owner Registration
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-5"
      >
        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.fullName?.message}
          </p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <input
            {...register("mobileNumber")}
            placeholder="Mobile Number"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.mobileNumber?.message}
          </p>
        </div>

        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div>
          <select
            {...register("propertyType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Property Type</option>
            <option>Independent House</option>
            <option>Villa</option>
            <option>Apartment</option>
          </select>
        </div>

        <div>
          <select
            {...register("projectType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Project Type</option>
            <option>New Construction</option>
            <option>Renovation</option>
            <option>Interior Design</option>
          </select>
        </div>

        <button
          className="
          col-span-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          hover:bg-blue-700
        "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default HouseOwnerRegister;