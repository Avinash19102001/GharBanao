import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractorCompleteProfileSchema } from "./schemas/contractorCompleteProfileSchema";
import { useState, useRef } from "react";
import Cookies from "js-cookie";

const stepFields = {
  1: ["Name", "email", "phoneNumber", "pincode", "address"],
  2: [
    "companyName",
    "licenseNumber",
    "yearsOfExperience",
    "gstNumber",
    "panNumber",
    "website",
    "businessType",
    "registrationYear",
    "teamSize",
    "about",
  ],
  3: ["services", "equipment", "serviceLocations"],
  4: [],
};

const serviceOptions = [
  { title: "Residential Construction", sub: "Villas, apartments & homes" },
  { title: "Commercial Construction", sub: "Offices, retail & storage" },
  { title: "Renovation & Remodeling", sub: "Structural alterations & repairs" },
  { title: "Interior Work", sub: "Modular fittings & design" },
  { title: "Structural Work", sub: "Foundation, pillars & beams" },
  { title: "Plumbing & Electrical", sub: "Wiring, piping & connections" },
];

const equipmentOptions = [
  "Concrete Mixer",
  "Excavator",
  "Scaffolding",
  "Bar Bending Machine",
  "Concrete Vibrator",
  "Safety Equipment",
];

const documentOptions = [
  {
    label: "Business License",
    key: "business_license",
  },
  {
    label: "Company Registration",
    key: "company_registration",
  },
  {
    label: "GST Certificate",
    key: "gst_certificate",
  },
  {
    label: "PAN Card",
    key: "pan_card",
  },
  {
    label: "Insurance Certificate",
    key: "insurance_certificate",
  },
  {
    label: "ISO Certificate",
    key: "iso_certificate",
  },
];

const StepHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h2 className="font-bold text-xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

const FormField = ({ label, error, children, className = "" }) => (
  <div className={className}>
    <label className="block mb-2 font-medium text-sm text-gray-700">
      {label}
    </label>

    {children}

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const UploadTile = ({
  title,
  description,
  icon,
  onChange,
  accept,
  multiple = false,
  capture,
  className = "w-40",
}) => (
  <label
    className={`border border-dashed rounded-xl p-6 ${className} text-center cursor-pointer hover:border-green-500`}
  >
    <div className="text-2xl mb-2">{icon}</div>

    <h4 className="font-semibold text-sm">{title}</h4>

    <p className="text-xs text-gray-400">{description}</p>

    <input
      type="file"
      accept={accept}
      multiple={multiple}
      capture={capture}
      onChange={onChange}
      className="hidden"
    />
  </label>
);

const ContractorCompleteProfile = () => {
  const navigate = useNavigate();

  const token = Cookies.get("token");

  // We'll keep userId fixed later once backend sends it
  const userId = 1;

  const [currentStep, setCurrentStep] = useState(1);
  const [profilePreview, setProfilePreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const profileImageRef = useRef(null);

  const [serviceLocation, setServiceLocation] = useState("");
  const [serviceLocations, setServiceLocations] = useState([]);

  const [galleryImages, setGalleryImages] = useState([]);
  const [documents, setDocuments] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contractorCompleteProfileSchema),
    mode: "onTouched",
    defaultValues: {
      services: [],
      equipment: [],
      serviceLocations: [],
      commercialInsurance: false,
    },
  });

  const services = watch("services");
  const equipment = watch("equipment");

  const handleFilePreview = (file, setPreview) => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    handleFilePreview(file, setLogoPreview);

    if (profileImageRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      profileImageRef.current.files = dt.files;
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setGalleryImages(previews);
  };

  const handleDocumentUpload = (docName, file) => {
    setDocuments((prev) => ({
      ...prev,
      [docName]: file,
    }));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData();

      // ============================
      // User ID
      // ============================

      formData.append("user_id", localStorage.getItem("userId"));

      // ============================
      // Company Details
      // ============================

      formData.append("gstin", data.gstNumber || "");
      formData.append("pan", data.panNumber || "");
      formData.append("website", data.website || "");
      formData.append("business_type", data.businessType || "");
      formData.append("registration_year", data.registrationYear || 0);
      formData.append("team_size", data.teamSize || "");

      // ============================
      // Services
      // ============================

      formData.append(
        "residential_construction",
        data.services?.includes("Residential Construction"),
      );

      formData.append(
        "commercial_construction",
        data.services?.includes("Commercial Construction"),
      );

      formData.append(
        "renovation_remodeling",
        data.services?.includes("Renovation & Remodeling"),
      );

      formData.append(
        "interior_work",
        data.services?.includes("Interior Work"),
      );

      formData.append(
        "structural_work",
        data.services?.includes("Structural Work"),
      );

      formData.append(
        "plumbing_electrical",
        data.services?.includes("Plumbing & Electrical"),
      );

      // ============================
      // Equipment
      // ============================

      formData.append(
        "concrete_mixer",
        data.equipment?.includes("Concrete Mixer"),
      );

      formData.append("excavator", data.equipment?.includes("Excavator"));

      formData.append("scaffolding", data.equipment?.includes("Scaffolding"));

      formData.append(
        "bar_bending_machine",
        data.equipment?.includes("Bar Bending Machine"),
      );

      formData.append(
        "concrete_vibrator",
        data.equipment?.includes("Concrete Vibrator"),
      );

      formData.append(
        "safety_equipment",
        data.equipment?.includes("Safety Equipment"),
      );

      // ============================
      // Service Locations
      // ============================

      formData.append("service_locations", serviceLocations.join(", "));

      // ============================
      // Insurance
      // ============================

      formData.append(
        "commercial_liability_insurance",
        data.commercialInsurance || false,
      );

      // ============================
      // Files
      // ============================

      if (profileImageRef.current?.files?.[0]) {
        formData.append("company_logo", profileImageRef.current.files[0]);
      }

      if (galleryImages.length > 0) {
        formData.append("gallery_images", galleryImages[0].file);
      }

      if (documents["Business License"]) {
        formData.append("business_license", documents["Business License"]);
      }

      if (documents["Company Registration"]) {
        formData.append(
          "company_registration",
          documents["Company Registration"],
        );
      }

      if (documents["GST Certificate"]) {
        formData.append("gst_certificate", documents["GST Certificate"]);
      }

      if (documents["PAN Card"]) {
        formData.append("pan_card", documents["PAN Card"]);
      }

      if (documents["Insurance Certificate"]) {
        formData.append(
          "insurance_certificate",
          documents["Insurance Certificate"],
        );
      }

      if (documents["ISO Certificate"]) {
        formData.append("iso_certificate", documents["ISO Certificate"]);
      }

      // ============================
      // API
      // ============================

      const response = await axios.post(
        "http://192.168.0.3:8000/contractor-profile/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);

      alert("Profile Created Successfully");

      navigate("/contractordashboard");
    } catch (error) {
      console.log(error);

      console.log(error.response?.data);

      if (error.response?.data?.detail) {
        const detail = error.response.data.detail;

        if (Array.isArray(detail)) {
          setSubmitError(detail.map((err) => err.msg).join(", "));
        } else {
          setSubmitError(detail);
        }
      } else {
        setSubmitError("Unable to create profile.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleAddLocation = () => {
    if (!serviceLocation.trim()) return;

    if (serviceLocations.includes(serviceLocation.trim())) return;

    if (serviceLocations.length >= 3) return;

    const updated = [...serviceLocations, serviceLocation.trim()];

    setServiceLocations(updated);

    setValue("serviceLocations", updated);

    setServiceLocation("");
  };

  const validateCurrentStep = async () => {
    const fields = stepFields[currentStep] || [];

    if (!fields.length) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const valid = await trigger(fields);

    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">Profile Details</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-yellow-400 shadow">
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                <label className="mt-5 w-full">
                  <span className="block text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl cursor-pointer font-medium">
                    Upload Photo
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("profileImage")}
                    onChange={(e) =>
                      handleFilePreview(e.target.files?.[0], setProfilePreview)
                    }
                    className="hidden"
                  />
                </label>

                <label className="mt-3 w-full">
                  <span className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl cursor-pointer font-medium">
                    Capture Live
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) =>
                      handleFilePreview(e.target.files?.[0], setProfilePreview)
                    }
                    className="hidden"
                  />
                </label>
              </div>

              <div className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField label="Name" error={errors.Name?.message}>
                    <input
                      {...register("Name")}
                      placeholder="Enter Name"
                      className="w-full border p-3 rounded-xl"
                    />
                  </FormField>

                  <FormField label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      placeholder="Enter Email"
                      className="w-full border p-3 rounded-xl"
                    />
                  </FormField>

                  <FormField
                    label="Phone Number"
                    error={errors.phoneNumber?.message}
                  >
                    <input
                      {...register("phoneNumber")}
                      placeholder="Enter Phone Number"
                      className="w-full border p-3 rounded-xl"
                    />
                  </FormField>

                  <FormField label="Pincode" error={errors.pincode?.message}>
                    <input
                      {...register("pincode")}
                      placeholder="Enter Pincode"
                      className="w-full border p-3 rounded-xl"
                    />
                  </FormField>

                  <FormField
                    label="Address"
                    error={errors.address?.message}
                    className="md:col-span-2"
                  >
                    <textarea
                      rows={4}
                      {...register("address")}
                      placeholder="Enter Complete Address"
                      className="w-full border p-3 rounded-xl"
                    />
                  </FormField>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white rounded-2xl p-8 shadow mt-6">
            <StepHeader
              icon="🏢"
              title="Contractor Profile"
              subtitle="Add corporate configuration details for enterprise validation"
            />
            <hr className="mb-6" />

            <label className="block text-xs font-semibold text-gray-500 mb-3">
              COMPANY LOGO
            </label>
            <div className="border rounded-xl p-4 flex gap-4 items-center mb-8">
              <div className="h-20 w-20 rounded-xl overflow-hidden border">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Company Logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
                    Logo
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-semibold">
                  Upload your construction company logo
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Logo icon or full corporate badge vector layout (Max 3MB)
                </p>
                <div className="flex gap-3">
                  <label className="bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer text-sm">
                    Upload Logo
                    <input
                      type="file"
                      accept="image/*"
                      ref={profileImageRef}
                      onChange={(e) => {
                        handleLogoChange(e);
                      }}
                      className="hidden"
                    />
                  </label>

                  <label className="bg-yellow-500 text-black px-4 py-2 rounded-xl cursor-pointer text-sm">
                    Capture Live
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => {
                        handleLogoChange(e);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <FormField
                label="COMPANY NAME"
                error={errors.companyName?.message}
                className="md:col-span-2"
              >
                <input
                  {...register("companyName")}
                  placeholder="Enter company name"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>

              <FormField
                label="EXPERIENCE (YEARS)"
                error={errors.yearsOfExperience?.message}
              >
                <input
                  {...register("yearsOfExperience")}
                  type="number"
                  placeholder="0"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <FormField
                label="LICENSE NUMBER"
                error={errors.licenseNumber?.message}
              >
                <input
                  {...register("licenseNumber")}
                  placeholder="Enter license number"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
              <FormField label="GSTIN" error={errors.gstNumber?.message}>
                <input
                  {...register("gstNumber")}
                  placeholder="Enter GSTIN"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
              <FormField label="PAN" error={errors.panNumber?.message}>
                <input
                  {...register("panNumber")}
                  placeholder="Enter PAN"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
            </div>

            <div className="mb-5">
              <FormField label="WEBSITE" error={errors.website?.message}>
                <input
                  {...register("website")}
                  placeholder="www.company.com"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <FormField
                label="BUSINESS TYPE"
                error={errors.businessType?.message}
              >
                <select
                  {...register("businessType")}
                  className="w-full border p-3 rounded-xl mt-1"
                >
                  <option value="">Select Business Type</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Builder">Builder</option>
                  <option value="Construction Company">
                    Construction Company
                  </option>
                </select>
              </FormField>

              <FormField
                label="REGISTRATION YEAR"
                error={errors.registrationYear?.message}
              >
                <input
                  {...register("registrationYear")}
                  placeholder="Select year"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>

              <FormField label="TEAM SIZE" error={errors.teamSize?.message}>
                <input
                  {...register("teamSize")}
                  placeholder="25 - 50 Workers"
                  className="w-full border p-3 rounded-xl mt-1"
                />
              </FormField>
            </div>

            <FormField label="ABOUT COMPANY" error={errors.about?.message}>
              <textarea
                {...register("about")}
                rows={5}
                placeholder="Briefly describe your company, expertise, structural capabilities and key construction milestones..."
                className="w-full border p-3 rounded-xl mt-1"
              />
            </FormField>
          </div>
        );

      case 3:
        return (
          <div className="bg-white rounded-2xl p-8 shadow mt-6">
            <StepHeader
              icon="🔧"
              title="Services & Capabilities"
              subtitle="Enable accurate project matchmaking for homeowners"
            />
            <hr className="mb-6" />

            <h3 className="font-semibold mb-1">Services Offered</h3>
            <p className="text-xs text-gray-500 mb-4">
              Select the specific building capabilities your firm provides
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {serviceOptions.map((service) => (
                <label
                  key={service.title}
                  className="border rounded-xl p-4 cursor-pointer hover:border-green-500"
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      value={service.title}
                      {...register("services")}
                      className="mt-1"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{service.title}</h4>
                      <p className="text-xs text-gray-500">{service.sub}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <hr className="mb-6" />

            <h3 className="font-semibold mb-1">Equipment Owned</h3>
            <p className="text-xs text-gray-500 mb-4">
              Select heavy machinery or safety equipment in your possession
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {equipmentOptions.map((item) => (
                <label
                  key={item}
                  className="border rounded-xl p-4 cursor-pointer hover:border-green-500"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value={item}
                      {...register("equipment")}
                    />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                </label>
              ))}
            </div>

            <hr className="mb-6" />

            <h3 className="font-semibold mb-2">
              Service Locations
              <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                Min 1, Max 3
              </span>
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Add locations where your company provides services
            </p>

            <div className="flex gap-3">
              <input
                type="text"
                value={serviceLocation}
                onChange={(e) => setServiceLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddLocation();
                  }
                }}
                placeholder="e.g. Hyderabad, Telangana"
                className="flex-1 border rounded-xl p-3"
              />
              <button
                type="button"
                onClick={handleAddLocation}
                className="bg-green-700 text-white px-4 rounded-xl"
              >
                +
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {serviceLocations.map((location, index) => (
                <div
                  key={`${location}-${index}`}
                  className="bg-gray-100 px-3 py-2 rounded-lg text-sm flex items-center gap-2"
                >
                  {location}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedLocations = serviceLocations.filter(
                        (_, i) => i !== index,
                      );
                      setServiceLocations(updatedLocations);
                      setValue("serviceLocations", updatedLocations, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <p className="text-red-500 text-sm mt-2">
              {errors.serviceLocations?.message}
            </p>
          </div>
        );

      case 4:
        return (
          <div className="bg-white rounded-2xl p-8 shadow mt-6">
            <StepHeader
              icon="🛡️"
              title="Credentials, Media & Legal Files"
              subtitle="Securely verify your legal status to bid on premium projects"
            />
            <hr className="mb-6" />

            <h3 className="font-semibold mb-1">Gallery Images</h3>
            <p className="text-xs text-gray-500 mb-4">
              Provide photographs of active construction sites or completed
              projects
            </p>

            <div className="flex gap-4 mb-8">
              <UploadTile
                title="Upload Images"
                description="PNG, JPG up to 5MB"
                icon="📤"
                accept="image/*"
                multiple={false}
                onChange={handleGalleryUpload}
              />

              <UploadTile
                title="Take Photo"
                description="Capture Site Image"
                icon="📸"
                accept="image/*"
                capture="environment"
                multiple={false}
                onChange={handleGalleryUpload}
              />
            </div>

            {galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mb-8">
                {galleryImages.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img.preview}
                      alt="Gallery"
                      className="h-28 w-full object-cover rounded-xl"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setGalleryImages((prev) =>
                          prev.filter((_, i) => i !== index),
                        )
                      }
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <hr className="mb-6" />

            <h3 className="font-semibold mb-1">Documents Verification</h3>
            <p className="text-xs text-gray-500 mb-5">
              Upload PDF, JPG or PNG versions of active legal certifications
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {documentOptions.map((doc) => (
                <div
                  key={doc.key}
                  className="border rounded-xl p-4 flex justify-between items-center gap-3"
                >
                  <div>
                    <h4 className="font-medium text-sm">{doc.label}</h4>
                    <p className="text-xs text-gray-400">
                      {documents[doc.key]
                        ? documents[doc.key].name
                        : "No file uploaded"}
                    </p>
                  </div>
                  <label className="bg-gray-100 px-4 py-2 rounded-lg cursor-pointer text-sm">
                    Upload
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) =>
                        handleDocumentUpload(doc.key, e.target.files?.[0])
                      }
                      className="hidden"
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className="border rounded-xl p-4 mt-6 flex gap-3 items-start">
              <input
                type="checkbox"
                {...register("commercialInsurance")}
                className="mt-1"
              />
              <div>
                <h4 className="font-semibold text-sm">
                  Commercial Liability Insurance Available
                </h4>
                <p className="text-xs text-gray-500">
                  Check this box if your business offers active indemnity
                  insurance coverage.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const goToStep = (step) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };
  return (
    <div className="min-h-screen bg-[#f7f4ea] py-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-green-900 text-white rounded-3xl p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Complete your profile</h1>

              <p className="mt-2 text-green-100">
                Add your business credentials, media and capability parameters
                to activate your contractor dashboard.
              </p>
            </div>

            <div className="bg-green-800 px-8 py-5 rounded-2xl text-center">
              <h3 className="text-2xl font-bold">
                {Math.round((Math.min(currentStep, 4) / 4) * 100)}%
              </h3>

              <p className="text-sm text-green-100">Completion Tracker</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
            <div
              className="h-3 bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${(Math.min(currentStep, 4) / 4) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 text-center text-sm font-medium">
            <button
              type="button"
              onClick={() => goToStep(1)}
              className={currentStep === 1 ? "text-yellow-600 font-bold" : ""}
            >
              Personal Details
            </button>
            <button
              type="button"
              disabled={currentStep < 2}
              onClick={() => goToStep(2)}
              className={currentStep === 2 ? "text-yellow-600 font-bold" : ""}
            >
              Company Details
            </button>
            <button
              type="button"
              disabled={currentStep < 3}
              onClick={() => goToStep(3)}
              className={currentStep === 3 ? "text-yellow-600 font-bold" : ""}
            >
              Capabilities
            </button>
            <button
              type="button"
              disabled={currentStep < 4}
              onClick={() => goToStep(4)}
              className={currentStep === 4 ? "text-yellow-600 font-bold" : ""}
            >
              Credentials
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {renderCurrentStep()}

          {submitError && (
            <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4">
              <p className="text-red-700 font-medium">{submitError}</p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                className="px-6 py-3 border rounded-xl"
              >
                Previous
              </button>
            )}
            <button
              type="button"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl"
            >
              OAuth Verified Account
            </button>
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={validateCurrentStep}
                className="px-6 py-3 bg-yellow-500 text-white rounded-xl"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-700 text-white rounded-xl disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Profile"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractorCompleteProfile;
