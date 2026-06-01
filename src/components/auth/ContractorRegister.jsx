import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractorSchema } from "./schemas/contractorSchema";

const ContractorRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contractorSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    // await contractorService.register(data)
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Contractor Registration
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
        </div>

        <div>
          <input
            {...register("mobileNumber")}
            placeholder="Mobile Number"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("companyName")}
            placeholder="Company Name"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("experience")}
            placeholder="Experience (Years)"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <select
            {...register("contractorType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Select Contractor Type</option>
            <option value="civil">Civil Contractor</option>
            <option value="interior">Interior Contractor</option>
            <option value="electrical">Electrical Contractor</option>
            <option value="plumbing">Plumbing Contractor</option>
            <option value="turnkey">Turnkey Contractor</option>
          </select>
        </div>

        <div>
          <input
            {...register("gstNumber")}
            placeholder="GST Number"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("licenseNumber")}
            placeholder="License Number"
            className="w-full border p-3 rounded-xl"
          />
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
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Profile Photo
          </label>

          <input
            type="file"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl"
        >
          Register Contractor
        </button>
      </form>
    </div>
  );
};

export default ContractorRegister;