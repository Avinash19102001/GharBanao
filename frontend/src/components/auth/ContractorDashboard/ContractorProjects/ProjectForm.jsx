import { useState } from "react";

const ProjectForm = ({
    onClose,
    setProjects,
}) => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",

    projectType: "",

    address: "",
    city: "",
    state: "",
    pincode: "",

    startDate: "",
    completionDate: "",

    budget: "",
    advanceAmount: "",

    siteEngineer: "",
    supervisor: "",
    workers: "",

    status: "Planning",

    progress: 0,

    remarks: "",

    materials: [],

    blueprint: null,
    agreement: null,
    siteImages: null,
  });

  const materialOptions = [
    "Cement",
    "Steel",
    "Sand",
    "Bricks",
    "Aggregate",
    "Tiles",
    "Paint",
    "Electrical",
    "Plumbing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMaterialChange = (material) => {
    if (formData.materials.includes(material)) {
      setFormData((prev) => ({
        ...prev,
        materials: prev.materials.includes(material)
          ? prev.materials.filter((item) => item !== material)
          : [...prev.materials, material],
      }));
    } else {
      setFormData({
        ...formData,
        materials: [...formData.materials, material],
      });
    }
  };

  const handleFile = (e) => {
    const { name } = e.target;

    setFormData({
      ...formData,
      [name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
        id: Date.now(),

        ...formData,
    };

    setProjects((prev) => [
        newProject,
        ...prev,
    ]);

    alert("Project Added Successfully");

    onClose();
};

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-5">Project Information</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="">Select Project Type</option>

            <option>Residential</option>

            <option>Commercial</option>

            <option>Interior</option>

            <option>Renovation</option>

            <option>Industrial</option>
          </select>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-5">Client Details</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            name="clientName"
            placeholder="Client Name"
            value={formData.clientName}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="clientPhone"
            placeholder="Phone Number"
            value={formData.clientPhone}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="clientEmail"
            placeholder="Email"
            value={formData.clientEmail}
            onChange={handleChange}
            className="border rounded-xl p-3 md:col-span-2"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-5">Site Details</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            name="address"
            placeholder="Site Address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-xl p-3 md:col-span-2"
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />
        </div>
      </div>

      {/* Timeline */}

      <div>
        <h2 className="text-xl font-bold mb-5">Timeline</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium mb-2 block">Start Date</label>

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Expected Completion
            </label>

            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Budget Details</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="number"
            name="budget"
            placeholder="Estimated Budget"
            value={formData.budget}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            name="advanceAmount"
            placeholder="Advance Received"
            value={formData.advanceAmount}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Team Details</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            name="siteEngineer"
            placeholder="Site Engineer"
            value={formData.siteEngineer}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="supervisor"
            placeholder="Supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            name="workers"
            placeholder="Workers"
            value={formData.workers}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Project Status</h2>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-xl p-3 w-full"
        >
          <option>Planning</option>
          <option>Excavation</option>
          <option>Foundation</option>
          <option>Structure</option>
          <option>Brick Work</option>
          <option>Plastering</option>
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>Painting</option>
          <option>Finishing</option>
          <option>Completed</option>
        </select>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Progress</h2>

        <input
          type="range"
          min="0"
          max="100"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          className="w-full"
        />

        <p className="mt-2 font-semibold text-green-700">
          {formData.progress}% Completed
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Materials Required</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {materialOptions.map((material) => (
            <label
              key={material}
              className="flex items-center gap-3 border rounded-xl p-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.materials.includes(material)}
                onChange={() => handleMaterialChange(material)}
              />

              {material}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Upload Documents</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="font-medium block mb-2">Blueprint</label>

            <input type="file" name="blueprint" onChange={handleFile} />
          </div>

          <div>
            <label className="font-medium block mb-2">Agreement</label>

            <input type="file" name="agreement" onChange={handleFile} />
          </div>

          <div>
            <label className="font-medium block mb-2">Site Images</label>

            <input
              type="file"
              multiple
              name="siteImages"
              onChange={handleFile}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Remarks</h2>

        <textarea
          rows="5"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="Additional Notes..."
          className="border rounded-xl p-4 w-full resize-none"
        />
      </div>
      <div className="flex justify-end gap-4 pt-6 border-t">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 rounded-xl border"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl"
        >
          Save Project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
