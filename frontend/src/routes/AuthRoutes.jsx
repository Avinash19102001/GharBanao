import { lazy } from "react";


const Login = lazy(() => import("../components/auth/Login"));
const Register= lazy(()=>import("../components/auth/Register"))
const ForgotPassword=lazy(()=>import("../components/auth/ForgotPassword"))
const HouseOWnerRegister=lazy(()=>import("../components/auth/HouseOwnerRegister"))
const HouseProfileComplete=lazy(()=>import("../components/HouseProfileCompletion"))
const ContractorRegister=lazy(()=>import("../components/auth/ContractorRegister"))
const ContractorCompleteProfile=lazy(()=>("../components/auth/ContractorCompleteProfile.jsx"))
const SupplierRegister =lazy(()=>import("../components/auth/SupplierRegister"))
const SupplierContractor=lazy(()=>import("../components/SupplierContractor"))
const Equipment=lazy(()=>import("../components/auth/Equipment"))

const AuthRoutes = [
  {
    path: "/", 
    element: <Login />,
  },
  {
    path: "/register",
    element:<Register />
  },
  {
    path: "/forgotpassword",
    element:<ForgotPassword />
  },
  {
    path:"/houseownerregister",
    element:<HouseOWnerRegister />
  },
  {
    path:"/houseownerprofile",
    element:<HouseProfileComplete />
  },
  {
    path:"/contractorregister",
    element:<ContractorRegister/>
  },
 {
    path:"/contractorprofile",
    element:<ContractorCompleteProfile />
 },
 {
    path:"/supplierregister",
    element:<SupplierRegister />
 },
 {
    path:"/supplierprofile",
    element:<SupplierContractor />
 },

  {
    path:"/equipment",
    element:<Equipment />
  }
];

export default AuthRoutes;
