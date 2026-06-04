import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplierSchema } from "./schemas/supplierSchema";
import { useNavigate } from "react-router-dom";

const PasswordInput = ({ id, placeholder, register, name, disabled, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <input
        id={id}
        type={show ? "text" : "password"}
        {...register(name)}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`w-full border p-3 rounded-xl transition ${
          disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "bg-white"
        }`}
        style={{ paddingRight: "44px" }}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        disabled={disabled}
        aria-label="Toggle password visibility"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
          flexShrink: 0,
        }}
      >
        {show ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke={disabled ? "#ccc" : "#9CA3AF"} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke={disabled ? "#ccc" : "#9CA3AF"} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        )}
      </button>
    </div>
  );
};
const getStrength = (password) => {
  const checks = {
    len:     password.length >= 8,
    upper:   /[A-Z]/.test(password),
    lower:   /[a-z]/.test(password),
    num:     /[0-9]/.test(password),
    special: /[!@#$%^&*@$!%*?&]/.test(password),
  };
  const score = Object.values(checks).filter(Boolean).length;
  return { checks, score };
};
const StrengthMeter = ({ password }) => {
  const { checks, score } = getStrength(password);
  const colors  = ["", "bg-red-500", "bg-yellow-400", "bg-yellow-400", "bg-green-500", "bg-green-600"];
  const labels  = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  const txColors = ["", "text-red-500", "text-yellow-500", "text-yellow-500", "text-green-600", "text-green-600"];
  if (!password) return null;
  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[0,1,2,3].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
            i < score ? colors[score] : "bg-gray-200"
          }`} />
        ))}
      </div>
      <p className={`text-xs font-medium ${txColors[score]}`}>{labels[score]}</p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
        {[
          { key: "len",     label: "At least 8 characters" },
          { key: "upper",   label: "Uppercase letter" },
          { key: "lower",   label: "Lowercase letter" },
          { key: "num",     label: "Number" },
          { key: "special", label: "Special character" },
        ].map(({ key, label }) => (
          <li key={key} className={`flex items-center gap-1 text-xs ${
            checks[key] ? "text-green-600" : "text-gray-400"
          }`}>
            {checks[key] ? "✓" : "○"} {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
const StepBar = ({ steps, current, completed }) => (
  <div className="flex items-center justify-between mb-8">
    {steps.map((label, i) => {
      const done   = completed.includes(i);
      const active = current === i;
      return (
        <div key={i} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all
              ${done   ? "bg-green-500 text-white"
              : active ? "bg-green-600 text-white ring-4 ring-green-100"
              :          "bg-gray-100 text-gray-400"}`}>
              {done ? "✓" : i + 1}
            </div>
            <span className={`text-xs whitespace-nowrap ${
              active ? "text-green-700 font-medium" : done ? "text-green-500" : "text-gray-400"
            }`}>{label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 mb-5 transition-all ${done ? "bg-green-400" : "bg-gray-200"}`} />
          )}
        </div>
      );
    })}
  </div>
);
const SuccessScreen = ({ data, onReset, navigate }) => (
  <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
        strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800">Registration Successful!</h3>
    <p className="text-gray-500 text-sm">Your supplier account has been created.</p>

    <div className="bg-gray-50 rounded-2xl p-5 w-full max-w-sm text-left border space-y-3 mt-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Name</span>
        <span className="font-medium text-gray-700">{data.FullName}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Email</span>
        <span className="font-medium text-gray-700">{data.email}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Company</span>
        <span className="font-medium text-gray-700">{data.companyName}</span>
      </div>
    </div>

    <div className="flex gap-3 mt-2">
      <button onClick={() => navigate("/complete-profile")}
        className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm font-medium">
        Complete Profile →
      </button>
      <button onClick={onReset}
        className="px-5 py-2 border rounded-xl text-gray-500 hover:bg-gray-50 transition text-sm">
        Register Another
      </button>
    </div>
  </div>
);
const SupplierRegister = () => {
  const navigate = useNavigate();

  const [currentStep,    setCurrentStep]    = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [pwValue,        setPwValue]        = useState("");
  const [submitted,      setSubmitted]      = useState(false);
  const [submittedData,  setSubmittedData]  = useState(null);
  const [isSubmitting,   setIsSubmitting]   = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(supplierSchema),
    mode: "onChange",
  });

  const STEPS = ["Full Name", "Email", "Password", "Confirm", "Company"];

  const isLocked = (step) => step > currentStep;

  const handleNext = async (fields, next) => {
    const valid = await trigger(fields);
    if (!valid) return;
    setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    setCurrentStep(next);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmittedData(data);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const onReset = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
    setPwValue("");
    setSubmitted(false);
    setSubmittedData(null);
  };

  const allDone = currentStep === 4 && completedSteps.length >= 4;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Supplier Registration</h2>

      {submitted ? (
        <SuccessScreen data={submittedData} onReset={onReset} navigate={navigate} />
      ) : (
        <>
          <StepBar steps={STEPS} current={currentStep} completed={completedSteps} />
          <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-5">
            <div className={`transition-all duration-300 ${isLocked(0) ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="relative">
                <input
                  {...register("FullName")}
                  placeholder="Full Name"
                  disabled={isLocked(0)}
                  className={`w-full border p-3 rounded-xl pr-10 transition
                    ${completedSteps.includes(0) ? "border-green-400 bg-green-50" : ""}
                    ${isLocked(0) ? "bg-gray-50 cursor-not-allowed" : ""}
                  `}
                />
                {completedSteps.includes(0) && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">✓</span>
                )}
              </div>
              {errors.FullName && (
                <p className="text-red-500 text-xs mt-1">{errors.FullName.message}</p>
              )}
              {currentStep === 0 && (
                <button type="button" onClick={() => handleNext(["FullName"], 1)}
                  className="mt-2 text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Next →
                </button>
              )}
            </div>
            <div className={`transition-all duration-300 ${isLocked(1) ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="relative">
                <input
                  {...register("email")}
                  placeholder="Email"
                  disabled={isLocked(1)}
                  className={`w-full border p-3 rounded-xl pr-10 transition
                    ${completedSteps.includes(1) ? "border-green-400 bg-green-50" : ""}
                    ${isLocked(1) ? "bg-gray-50 cursor-not-allowed" : ""}
                  `}
                />
                {completedSteps.includes(1) && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">✓</span>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
              {currentStep === 1 && (
                <button type="button" onClick={() => handleNext(["email"], 2)}
                  className="mt-2 text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Next →
                </button>
              )}
            </div>
            <div className={`transition-all duration-300 ${isLocked(2) ? "opacity-40 pointer-events-none" : ""}`}>
              <PasswordInput
                id="password"
                name="password"
                placeholder="Password"
                register={register}
                disabled={isLocked(2)}
                onChange={(e) => setPwValue(e.target.value)}
              />
              {!isLocked(2) && <StrengthMeter password={pwValue} />}
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
              {currentStep === 2 && (
                <button type="button" onClick={() => handleNext(["password"], 3)}
                  className="mt-2 text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Next →
                </button>
              )}
            </div>
            <div className={`transition-all duration-300 ${isLocked(3) ? "opacity-40 pointer-events-none" : ""}`}>
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                register={register}
                disabled={isLocked(3)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
              {currentStep === 3 && (
                <button type="button" onClick={() => handleNext(["confirmPassword"], 4)}
                  className="mt-2 text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Next →
                </button>
              )}
            </div>

            {/* ── 5. Company Name (full width) ── */}
            <div className={`md:col-span-2 transition-all duration-300 ${isLocked(4) ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="relative">
                <input
                  {...register("companyName")}
                  placeholder="Company Name"
                  disabled={isLocked(4)}
                  className={`w-full border p-3 rounded-xl pr-10 transition
                    ${completedSteps.includes(4) ? "border-green-400 bg-green-50" : ""}
                    ${isLocked(4) ? "bg-gray-50 cursor-not-allowed" : ""}
                  `}
                />
                {completedSteps.includes(4) && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">✓</span>
                )}
              </div>
              {errors.companyName && (
                <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
              )}
            </div>

            {/* ── Register Button ── */}
            <button
              type="submit"
              disabled={!allDone || isSubmitting}
              className={`md:col-span-2 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2
                ${allDone
                  ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Registering...
                </>
              ) : !allDone ? (
                `Complete step ${currentStep + 1} to continue`
              ) : (
                "Register Supplier ✓"
              )}
            </button>

          </form>
        </>
      )}
    </div>
  );
};
export default SupplierRegister;