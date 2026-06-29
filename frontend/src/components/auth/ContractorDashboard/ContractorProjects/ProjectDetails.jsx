import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  IndianRupee,
  Building2,
  Clock,
} from "lucide-react";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { state: project } = useLocation();

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8f4]">
      {/* Header */}

      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-green-700 mb-6"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>

          <div className="flex justify-between items-start">
            <div>
              <p className="uppercase tracking-widest text-green-700 font-semibold text-sm">
                Project File
              </p>

              <h1 className="text-4xl font-bold mt-2">{project.projectName}</h1>

              <p className="text-gray-500 mt-3 flex items-center gap-2">
                <MapPin size={16} />
                {project.address}, {project.city}
              </p>
            </div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="max-w-7xl mx-auto p-8">
        {/* Overview */}

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow p-6">
            <Building2 className="text-green-700 mb-3" />

            <p className="text-gray-500 text-sm">Project Type</p>

            <h3 className="text-xl font-bold mt-2">{project.projectType}</h3>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <IndianRupee className="text-green-700 mb-3" />

            <p className="text-gray-500 text-sm">Estimated Budget</p>

            <h3 className="text-xl font-bold mt-2">₹ {project.budget}</h3>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <Calendar className="text-green-700 mb-3" />

            <p className="text-gray-500 text-sm">Start Date</p>

            <h3 className="text-xl font-bold mt-2">{project.startDate}</h3>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <Clock className="text-green-700 mb-3" />

            <p className="text-gray-500 text-sm">Completion Date</p>

            <h3 className="text-xl font-bold mt-2">{project.completionDate}</h3>
          </div>
        </div>

        {/* Client Details */}

        <div className="mt-8 bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Client Information</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 text-green-700">
                <User size={18} />
                <span className="font-semibold">Client Name</span>
              </div>

              <p className="mt-2 text-gray-600">{project.clientName}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-green-700">
                <Phone size={18} />
                <span className="font-semibold">Phone</span>
              </div>

              <p className="mt-2 text-gray-600">{project.clientPhone}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-green-700">
                <Mail size={18} />
                <span className="font-semibold">Email</span>
              </div>

              <p className="mt-2 text-gray-600">{project.clientEmail}</p>
            </div>
          </div>
        </div>

        {/* Progress Section */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Progress */}

          <div className="bg-white rounded-3xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Project Progress</h2>

            <div className="flex justify-between mb-3">
              <span className="font-semibold">Current Status</span>

              <span className="text-green-700 font-bold">
                {project.progress}%
              </span>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-green-700 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-gray-500">Start Date</p>

                <h3 className="font-semibold mt-2">{project.startDate}</h3>
              </div>

              <div>
                <p className="text-gray-500">Completion</p>

                <h3 className="font-semibold mt-2">{project.completionDate}</h3>
              </div>
            </div>
          </div>

          {/* Team */}

          <div className="bg-white rounded-3xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Team Members</h2>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-gray-500 text-sm">Site Engineer</p>

                  <h3 className="font-semibold text-lg">
                    {project.siteEngineer}
                  </h3>
                </div>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-gray-500 text-sm">Supervisor</p>

                  <h3 className="font-semibold text-lg">
                    {project.supervisor}
                  </h3>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Workers</p>

                  <h3 className="font-semibold text-lg">{project.workers}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materials */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Materials Required</h2>

          <div className="flex flex-wrap gap-4">
            {project.materials?.map((material) => (
              <span
                key={material}
                className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-medium"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Documents */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Uploaded Documents</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold">Blueprint</h3>

              <p className="text-gray-500 mt-2">
                {project.blueprint ? project.blueprint.name : "No File"}
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold">Agreement</h3>

              <p className="text-gray-500 mt-2">
                {project.agreement ? project.agreement.name : "No File"}
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold">Site Images</h3>

              <p className="text-gray-500 mt-2">
                {project.siteImages ? "Uploaded" : "No Images"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="mb-4">
    <p className="text-gray-500 text-sm">{label}</p>

    <h3 className="font-semibold mt-1">{value}</h3>
  </div>
);

const TimelineItem = ({ title, date }) => (
  <div className="border-l-4 border-green-700 pl-4">
    <h3 className="font-semibold">{title}</h3>

    <p className="text-gray-500 text-sm">{date}</p>
  </div>
);

export default ProjectDetails;
