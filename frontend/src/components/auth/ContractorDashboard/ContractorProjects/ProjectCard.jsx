import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">{project.projectName}</h2>

          <p className="text-gray-500">{project.projectType}</p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm h-fit">
          {project.status}
        </span>
      </div>

      <div className="mt-6 space-y-2">
        <p>
          <span className="font-semibold">Client :</span> {project.clientName}
        </p>

        <p>
          <span className="font-semibold">Location :</span> {project.city}
        </p>

        <p>
          <span className="font-semibold">Budget :</span> ₹{project.budget}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>

          <span>{project.progress}%</span>
        </div>

        <div className="w-full h-3 rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-green-700"
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      <button
        onClick={() =>
          navigate(`/project/${project.id}`, {
            state: project,
          })
        }
        className="mt-6 w-full border border-green-700 text-green-700 py-3 rounded-xl hover:bg-green-700 hover:text-white transition"
      >
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
