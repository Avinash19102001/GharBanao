import { lazy } from "react";
import HouseOwnerDashboard from "../components/HouseOwnerDashboard";
const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Register"));
const ForgotPassword = lazy(() => import("../components/auth/ForgotPassword"));
const HouseOWnerRegister = lazy(
  () => import("../components/auth/HouseOwnerRegister"),
);
const HouseOwnerProfile = lazy(
  () => import("../components/auth/HouseOwnerProfile"),
);
const ContractorRegister = lazy(
  () => import("../components/auth/ContractorRegister"),
);
const ContractorCompleteProfile = lazy(
  () => import("../components/auth/ContractorCompleteProfile"),
);
const ContractorDashboard = lazy(
  () => import("../components/auth/ContractorDashboard"),
);
const SupplierRegister = lazy(
  () => import("../components/auth/SupplierRegister"),
);
const SupplierCompleteProfile = lazy(
  () => import("../components/auth/SupplierCompleteProfile"),
);
const EquipmentRegister = lazy(
  () => import("../components/auth/EquipmentRegister"),
);
const Equipmentprofile = lazy(
  () => import("../components/auth/Equipmentprofile"),
);
const AuthRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/houseownerregister",
    element: <HouseOWnerRegister />,
  },
  {
    path: "/houseownerprofile",
    element: <HouseOwnerProfile />,
  },
  {
    path: "/houseownerprofile",
    element: <HouseOwnerProfile />,
  },
  {
    path: "/houseownerdashboard",
    element: <HouseOwnerDashboard />,
  },
  {
    path: "/contractorregister",
    element: <ContractorRegister />,
  },
  {
    path: "/contractorprofile",
    element: <ContractorCompleteProfile />,
  },
  {
    path: "/contractordashboard",
    element: <ContractorDashboard />,
  },
  {
    path: "/supplierregister",
    element: <SupplierRegister />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/houseownerregister",
    element: <HouseOWnerRegister />,
  },
  {
    path: "/houseownerprofile",
    element: <HouseOwnerProfile />,
  },
  {
    path: "/contractorregister",
    element: <ContractorRegister />,
  },
  {
    path: "/contractorprofile",
    element: <ContractorCompleteProfile />,
  },
  {
    path: "/supplierregister",
    element: <SupplierRegister />,
  },
  {
    path: "/supplier-completeprofile",
    element: <SupplierCompleteProfile />,
  },

  {
    path: "/equipment",
    element: <EquipmentRegister />,
  },
  {
    path: "/equipmentregister",
    element: <EquipmentRegister />,
  },
  {
    path: "/equipmentregister",
    element: <EquipmentRegister />,
  },
  {
    path: "/equipmentprofile",
    element: <Equipmentprofile />,
  },
];

export default AuthRoutes;
