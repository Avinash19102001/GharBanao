import { useState } from "react";
import { Plus } from "lucide-react";
import AddProjectDrawer from "./AddProjectDrawer";
import ProjectCard from "./ProjectCard";

const ContractorProjects = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [projects, setProjects] = useState([]);

  return (
    <div className="p-8">

      {/* Header */}

      <div className="flex justify-between items-start border-b pb-6">

        <div>

          <p className="uppercase tracking-widest text-green-700 text-sm font-semibold">
            Execution Board
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Active Development Sites
          </h1>

          <p className="text-gray-500 mt-2">
            Track structural framework status, foundation casts, and luxury villa deliveries.
          </p>

        </div>

        <button
          onClick={() => setOpenDrawer(true)}
          className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 flex items-center gap-2"
        >
          <Plus size={18} />
          Add Project File
        </button>

      </div>

      {/* Projects */}

      <div className="mt-10">

        {projects.length === 0 ? (

          <div className="h-[400px] rounded-3xl bg-white border border-dashed flex justify-center items-center">

            <div className="text-center">

              <h2 className="text-2xl font-semibold">
                No Active Projects
              </h2>

              <p className="text-gray-500 mt-3">
                Click "Add Project File" to create your first project.
              </p>

            </div>

          </div>

        ) : (

          <div className="grid lg:grid-cols-2 gap-6">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        )}

      </div>

      <AddProjectDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        setProjects={setProjects}
      />

    </div>
  );
};

export default ContractorProjects;