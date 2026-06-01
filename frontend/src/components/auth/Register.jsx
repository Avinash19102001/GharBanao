import { useState } from "react";
import { Link } from "react-router-dom";

import HouseOwnerRegister from "./HouseOwnerRegister";
import ContractorRegister from "./ContractorRegister";
import SupplierRegister from "./SupplierRegister";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("houseowner");

  const roles = [
    {
      id: "houseowner",
      title: "House Owner",
      icon: "🏠",
      description: "Build your dream home",
    },
    {
      id: "contractor",
      title: "Contractor",
      icon: "👷",
      description: "Manage construction projects",
    },
    {
      id: "supplier",
      title: "Supplier",
      icon: "🚚",
      description: "Supply construction materials",
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* LEFT SIDE */}

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Join
            <br />
            GharBanao
          </h1>

          <p className="mt-6 text-lg text-slate-200 max-w-lg">
            Connect homeowners, contractors, and suppliers
            on one powerful platform.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">300+</h3>
              <p>Contractors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">150+</h3>
              <p>Suppliers</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div
          className="
            w-full
            max-w-2xl
            backdrop-blur-xl
            bg-white/70
            border
            border-white/30
            shadow-2xl
            rounded-3xl
            p-8
          "
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              GharBanao
            </h2>

            <p className="text-slate-500 mt-2">
              Create your account
            </p>
          </div>

          {/* ROLE SELECTION */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left
                  ${
                    selectedRole === role.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                      : "bg-white hover:border-blue-400"
                  }`}
              >
                <div className="text-3xl">{role.icon}</div>

                <h3 className="font-semibold mt-3">
                  {role.title}
                </h3>

                <p
                  className={`text-xs mt-1 ${
                    selectedRole === role.id
                      ? "text-white/90"
                      : "text-slate-500"
                  }`}
                >
                  {role.description}
                </p>
              </button>
            ))}
          </div>

          {/* REGISTRATION FORM */}

          <div className="mt-8">
            {selectedRole === "houseowner" && (
              <HouseOwnerRegister />
            )}

            {selectedRole === "contractor" && (
              <ContractorRegister />
            )}

            {selectedRole === "supplier" && (
              <SupplierRegister />
            )}
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?
            <Link
              to="/"
              className="text-blue-600 ml-1 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;