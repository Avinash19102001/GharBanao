import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quoteSchema = z.object({
  projectType: z.string().min(1, "Project Type is required"),

  budget: z.coerce
    .number()
    .min(100000, "Minimum budget should be ₹1 Lakh"),

  location: z.string().min(1, "Location is required"),

  area: z.coerce
    .number()
    .min(500, "Minimum area should be 500 sqft"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),
});

export default function RequestQuote({
  isOpen,
  onClose,
  contractor,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      projectType: "",
      budget: "",
      location: "",
      area: "",
      description: "",
    },
  });

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        contractorId: contractor?.id,
        contractorName: contractor?.name,
        ...data,
      };

      console.log("Quote Request Payload:", payload);

      alert("Quote Request Submitted Successfully");

      reset();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center overflow-y-auto py-10 px-4"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl z-10">
          <h2 className="text-2xl font-bold">
            Request Quote
          </h2>

          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 overflow-hidden"
        >
          {/* Scrollable Body */}

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Contractor */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Contractor
              </label>

              <input
                value={contractor?.name || ""}
                disabled
                className="w-full border p-3 rounded-xl bg-gray-100"
              />
            </div>

            {/* Project Type */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Type
              </label>

              <select
                {...register("projectType")}
                className="w-full border rounded-xl p-3"
              >
                <option value="">
                  Select Project Type
                </option>

                <option value="Villa">
                  Villa Construction
                </option>

                <option value="Apartment">
                  Apartment Construction
                </option>

                <option value="Commercial">
                  Commercial Building
                </option>

                <option value="Renovation">
                  Renovation
                </option>
              </select>

              {errors.projectType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Budget & Area */}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget (₹)
                </label>

                <input
                  type="number"
                  {...register("budget")}
                  placeholder="5000000"
                  className="w-full border p-3 rounded-xl"
                />

                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Area (Sqft)
                </label>

                <input
                  type="number"
                  {...register("area")}
                  placeholder="2400"
                  className="w-full border p-3 rounded-xl"
                />

                {errors.area && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.area.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Location
              </label>

              <input
                {...register("location")}
                placeholder="Hyderabad"
                className="w-full border p-3 rounded-xl"
              />

              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Description */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Description
              </label>

              <textarea
                rows={6}
                {...register("description")}
                placeholder="Describe your project requirements..."
                className="w-full border p-3 rounded-xl resize-none"
              />

              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* Footer */}

          <div className="border-t p-4 bg-white rounded-b-3xl">
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-3 border rounded-xl"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl disabled:opacity-50"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Quote Request"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}