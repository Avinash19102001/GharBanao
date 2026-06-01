import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplierSchema } from "./schemas/supplierSchema";

const SupplierRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(supplierSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    // await supplierService.register(data)
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Supplier Registration
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-5"
      >
        <div>
          <input
            {...register("ownerName")}
            placeholder="Owner Name"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("businessName")}
            placeholder="Business Name"
            className="w-full border p-3 rounded-xl"
          />
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
            {...register("gstNumber")}
            placeholder="GST Number"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("deliveryRadius")}
            placeholder="Delivery Radius (KM)"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-3 font-medium">
            Material Categories
          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label>
              <input
                type="checkbox"
                value="cement"
                {...register("materialCategories")}
              />
              <span className="ml-2">Cement</span>
            </label>

            <label>
              <input
                type="checkbox"
                value="steel"
                {...register("materialCategories")}
              />
              <span className="ml-2">Steel</span>
            </label>

            <label>
              <input
                type="checkbox"
                value="tiles"
                {...register("materialCategories")}
              />
              <span className="ml-2">Tiles</span>
            </label>

            <label>
              <input
                type="checkbox"
                value="paints"
                {...register("materialCategories")}
              />
              <span className="ml-2">Paints</span>
            </label>
          </div>
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
            Business Certificate
          </label>

          <input
            type="file"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-green-600 text-white py-3 rounded-xl"
        >
          Register Supplier
        </button>
      </form>
    </div>
  );
};

export default SupplierRegister;