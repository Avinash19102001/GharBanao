import { X } from "lucide-react";
import ProjectForm from "./ProjectForm";

const AddProjectDrawer = ({
    open,
    onClose,
    setProjects,
}) => {
  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[650px] bg-white shadow-2xl z-50 transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-6 py-5 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Add New Project
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Fill in the project details to create a new project file.
            </p>
          </div>

          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full hover:bg-gray-100 flex justify-center items-center"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}

        <div className="p-6">
          <ProjectForm onClose={onClose}
          setProjects={setProjects} />
        </div>
      </div>
    </>
  );
};

export default AddProjectDrawer;