import { lazy } from "react";
const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Register"));
const ForgotPassword = lazy(() => import("../components/auth/ForgotPassword"));

const HouseOWnerRegister = lazy(
  () => import("../components/auth/HouseOwnerRegister"),
);

const HouseOwnerProfile = lazy(
  () => import("../components/auth/HouseOwnerProfile"),
);

const HouseOwnerDashboard = lazy(
  () => import("../components/auth/Houseownerpages/HouseOwnerDashboard"),
);
const ContractorRegister = lazy(
  () => import("../components/auth/ContractorRegister"),
);

const ContractorCompleteProfile = lazy(
  () => import("../components/auth/ContractorCompleteProfile"),
);

const ContractorDashboard = lazy(
  () => import("../components/auth/ContractorDashboard/ContractorDashboard"),
);

const SupplierRegister = lazy(
  () => import("../components/auth/SupplierRegister"),
);

const SupplierCompleteProfile = lazy(
  () => import("../components/auth/SupplierCompleteProfile"),
);

// Supplier Dashboard Components
const SupplierDashboard = lazy(
  () => import("../components/auth/SupplierDashboard/SupplierDashboard"),
);

const Requests = lazy(
  () => import("../components/auth/SupplierDashboard/Requests"),
);

const Orders = lazy(
  () => import("../components/auth/SupplierDashboard/Orders"),
);

const AddProducts = lazy(
  () => import("../components/auth/SupplierDashboard/Products")
);

const DailyStockUpdates = lazy(
  () => import("../components/auth/SupplierDashboard/DailyStockUpdates"),
);

const Analytics = lazy(
  () => import("../components/auth/SupplierDashboard/Analytics"),
);

const Messages = lazy(
  () => import("../components/auth/SupplierDashboard/Messages"),
);

const Settings = lazy(
  () => import("../components/auth/SupplierDashboard/Settings"),
);

const HeroSection = lazy(
  () => import("../components/auth/SupplierDashboard/HeroSection"),
);

const TopProducts = lazy(
  () => import("../components/auth/SupplierDashboard/TopProducts"),
);

const Notifications = lazy(
  () => import("../components/auth/SupplierDashboard/Notifications"),
);

const Profile = lazy(
  () => import("../components/auth/SupplierDashboard/Profile"),
);

const DashboardCards = lazy(
  () => import("../components/auth/SupplierDashboard/DashboardCards"),
);

const Header = lazy(
  () => import("../components/auth/SupplierDashboard/Header"),
);

const EquipmentRegister = lazy(
  () => import("../components/auth/EquipmentRegister"),
);

const Equipmentprofile = lazy(
  () => import("../components/auth/Equipmentprofile"),
);
const ContractorRequests = lazy(
  () => import("../components/auth/ContractorDashboard/ContractorRequests"),
);
const ContractorClients = lazy(
  () => import("../components/auth/ContractorDashboard/ContractorClients"),
);
const ContractorProjects = lazy(
  () => import("../components/auth/ContractorDashboard/ContractorProjects"),
);
const HouseEstimate = lazy(
  () => import("../components/auth/Houseownerpages/HouseEstimate"),
);
const FindContractors = lazy(
  () => import("../components/auth/Houseownerpages/FindContractor"),
);
const FindSuppliers = lazy(
  () => import("../components/auth/Houseownerpages/FindSuppliers"),
);

const ContractorSiteMonitoring = lazy(
  () =>
    import("../components/auth/ContractorDashboard/ContractorSiteMonitoring"),
);
const ContractorMessages = lazy(
  () => import("../components/auth/ContractorDashboard/ContractorMessages"),
);
const RequestQuote = lazy(
  () => import("../components/auth/Houseownerpages/RequestQuote"),
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
    path: "/contractorrequests",
    element: <ContractorRequests />,
  },
  {
    path: "/contractorclients",
    element: <ContractorClients />,
  },
  {
    path: "/contractorprojects",
    element: <ContractorProjects />,
  },
  {
    path: "/contractorsitemonitoring",
    element: <ContractorSiteMonitoring />,
  },
  {
    path: "/contractormessages",
    element: <ContractorMessages />,
  },
  {
    path: "/supplierregister",
    element: <SupplierRegister />,
  },

  {
    path: "/supplier/profile",
    element: <SupplierCompleteProfile />,
  },

  {
    path: "/equipmentregister",
    element: <EquipmentRegister />,
  },

  {
    path: "/equipmentprofile",
    element: <Equipmentprofile />,
  },


  {
    path: "/supplier/dashboard/orders",
    element: <Orders />,
  },

  {
    path: "/supplier/dashboard/add-product",
    element: <AddProducts />,
  },

  {
    path: "/supplier/dashboard/stock-update",
    element: <DailyStockUpdates />,
  },

  {
    path: "/supplierdashboard/analytics",
    element: <Analytics />,
  },

  {
    path: "/supplierdashboard/messages",
    element: <Messages />,
  },

  {
    path: "/supplierdashboard/settings",
    element: <Settings />,
  },

  {
    path: "/supplierdashboard/HeroSection",
    element: <HeroSection />,
  },

  {
    path: "/supplierdashboard/DashboardCards",
    element: <DashboardCards />,
  },

  {
    path: "/supplierdashboard/Notifications",
    element: <Notifications />,
  },

  {
    path: "/supplierdashboard/Profile",
    element: <Profile />,
  },

  {
    path: "/supplierdashboard/TopProducts",
    element: <TopProducts />,
  },

  {
    path: "/equipmentregister",
    element: <EquipmentRegister />,
  },

  {
    path: "/equipmentprofile",
    element: <Equipmentprofile />,
  },
  {
    path: "/hirecontractor",
    element: <h1>Hire Contractor</h1>,
  },
  {
    path: "/houseestimate",
    element: <HouseEstimate />,
  },
  {
    path: "/findcontractor",
    element: <FindContractors />,
  },
  {
    path: "/findsuppliers",
    element: <FindSuppliers />,
  },
  {
    path: "/supplier/dashboard/requests",
    element: <Requests />,
  },
  {
    path: "/supplier/dashboard",
    element: <SupplierDashboard />,
  },
  {
    path: "requestquote",
    element: <RequestQuote />,
  },
];

export default AuthRoutes;
