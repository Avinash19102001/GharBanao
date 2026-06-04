import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyEmailOtpSchema } from "./schemas/VerifyEmailOtpSchema";

const VerifyEmailOtp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifyEmailOtpSchema),
  });

  const onSubmit = (data) => {
    console.log("OTP:", data);

    navigate("/contractor-complete-profile");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-3xl p-8 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Verify Email</h2>

      <p className="text-center text-gray-600 mb-6">
        Enter the OTP sent to your email address.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("otp")}
            maxLength={6}
            inputMode="numeric"
            placeholder="Enter 6-digit OTP"
            className="w-full border p-3 rounded-xl text-center text-2xl tracking-widest"
          />

          <p className="text-red-500 text-sm">{errors.otp?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Verify OTP
        </button>

        <button type="button" className="w-full border py-3 rounded-xl">
          Resend OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyEmailOtp;
