import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { suppliercompleteProfile } from "./auth/schemas/SupplierCompleteProfile";
import { useState } from "react";

const SupplierCompleteProfile = () => {
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

        navigate("/supplier/dashboard");
    };

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-10">
            <h2 className="text-3xl font-bold mb-8">Complete Supplier Profile</h2>

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

                {/* Company Name */}
                <div>
                    <input
                        {...register("companyName")}
                        placeholder="Company Registered Name"
                        className="w-full border p-3 rounded-xl"
                    />
                    <p className="text-red-500 text-sm">{errors.companyName?.message}</p>
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

                {/* Location */}
                <div>
                    <input
                        {...register("location")}
                        placeholder="Location"
                        className="w-full border p-3 rounded-xl"
                    />
                    <p className="text-red-500 text-sm">{errors.location?.message}</p>
                </div>

                {/* Previous Work Images */}
                <div className="md:col-span-2">
                    <label className="block mb-2 font-medium">
                        Upload Previous Work (Maximum 4 Images)
                    </label>

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        {...register("workImages")}
                        onChange={(e) => {
                            register("workImages").onChange(e);
                            handleImageChange(e);
                        }}
                        className="w-full border p-3 rounded-xl"
                    />

                    {imagePreviews.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {imagePreviews.map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={image.preview}
                                        alt={`Preview ${index + 1}`}
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

                    <p className="text-red-500 text-sm">{errors.workImages?.message}</p>

                    {workImages && workImages.length > 0 && (
                        <p className="text-green-600 text-sm mt-2">
                            {workImages.length} image(s) selected
                        </p>
                    )}
                </div>

                {/* Certification Upload */}
                <div>
                    <label className="block mb-2 font-medium">
                        Supplier Certification
                    </label>

                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register("certificate")}
                        className="w-full border p-3 rounded-xl"
                    />

                    <p className="text-red-500 text-sm">{errors.certificate?.message}</p>
                </div>

                {/* License Upload */}
                <div>
                    <label className="block mb-2 font-medium">Supplier License</label>

                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register("license")}
                        className="w-full border p-3 rounded-xl"
                    />

                    <p className="text-red-500 text-sm">{errors.license?.message}</p>
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

export default SupplierCompleteProfile;