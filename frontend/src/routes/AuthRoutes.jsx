
const AuthRoutes = [
  {
    path: "/",
    lazy: async () => {
      const { default: Login } = await import("../components/auth/Login");
      return { Component: Login };
    },
  },
  {
    path: "/register",
    lazy: async () => {
      const { default: Register } = await import("../components/auth/Register");
      return { Component: Register };
    },
  },
  {
    path: "/verify-email",
    lazy: async () => {
      const { default: VerifyEmailOtp } =
        await import("../components/auth/VerifyEmailOtp");

      return { Component: VerifyEmailOtp };
    },
  },
  {
    path: "/contractor-complete-profile",
    lazy: async () => {
      const { default: ContractorCompleteProfile } =
        await import("../components/auth/ContractorCompleteProfile.jsx");

      return { Component: ContractorCompleteProfile };
    },
  },
  {
    path: "/contractor/dashboard",
    lazy: async () => {
      const { default: ContractorDashboard } =
        await import("../components/auth/ContractorDashboard");

      return {
        Component: ContractorDashboard,
      };
    },
  },
];

export default AuthRoutes;
