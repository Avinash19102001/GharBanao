import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SupplierProfile } from "./schemas/SupplierProfile";
import { supplierCompleteProfile } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaIdCard,
  FaMapMarkerAlt,
  FaMap,
  FaFilePdf,
  FaEnvelope
} from "react-icons/fa";

const SupplierCompleteProfile = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  }
    =
    useForm({
      resolver: zodResolver(SupplierProfile)
    });

  const watchedData = watch();
  const [storeImage, setStoreImage] = useState(null);
  const [storePreview, setStorePreview] = useState(null);
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const categoryList = [
    "Cement",
    "Steel",
    "Sand",
    "Bricks",
    "Tiles",
    "Paint",
    "Electrical",
    "Plumbing"
  ];

  const handleImage = (file, type) => {

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Upload image only");
      return;
    }

    const url = URL.createObjectURL(file);

    if (type === "store") {
      setStoreImage(file);
      setStorePreview(url);
    }

    if (type === "logo") {
      setLogo(file);
      setLogoPreview(url);
    }

  };

  const handleCategory = (item) => {


    if (categories.includes(item)) {

      setCategories(
        categories.filter(
          x => x !== item
        )
      )

    }

    else {

      setCategories([
        ...categories,
        item
      ])

    }

  };

  const fetchLocation = async (pin) => {

    if (pin.length !== 6) return;

    const res =
      await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );

    const data =
      await res.json();

    if (data[0].Status === "Success") {

      const office = data[0].PostOffice[0];

      setValue(
        "city",
        office.District
      );

      setValue(
        "state",
        office.State
      );

    }

  };

  const calculateProgress = () => {
    let progress = 0;

    if (
      watchedData.name &&
      watchedData.email &&
      watchedData.phone_number &&
      watchedData.pincode &&
      watchedData.address
    ) {

      progress = 25;

    }

    if (
      watchedData.store_name &&
      watchedData.gstin &&
      watchedData.pan &&
      watchedData.business_type
    ) {

      progress = 50;

    }

    if (
      storeImage &&
      logo
    ) {

      progress = 75;

    }
    if (
      storeImage &&
      logo &&
      categories.length > 0 &&
      watchedData.name &&
      watchedData.email &&
      watchedData.phone_number &&
      watchedData.pincode &&
      watchedData.address &&
      watchedData.store_name &&
      watchedData.gstin &&
      watchedData.pan &&
      watchedData.business_type

    ) {

      progress = 100;

    }

    return progress;

  };

  const progress = calculateProgress();

  const submit = async (data) => {

    try {

      const form = new FormData();


      form.append(
        "user_id",
        0
      );


      form.append(
        "name",
        data.name
      );


      form.append(
        "email",
        data.email
      );


      form.append(
        "phone",
        data.phone
      );


      form.append(
        "address",
        data.address
      );


      form.append(
        "pincode",
        data.pincode
      );


      form.append(
        "store_name",
        data.store_name
      );


      form.append(
        "store_logo_url",
        logoPreview || ""
      );


      form.append(
        "gstin",
        data.gstin
      );


      form.append(
        "pan",
        data.pan
      );


      form.append(
        "website",
        data.website || ""
      );


      form.append(
        "business_type",
        data.business_type
      );


      form.append(
        "registration_year",
        data.registration_year || 0
      );


      form.append(
        "about",
        data.about || ""
      );


      form.append(
        "delivery_location1",
        data.delivery_location1 || ""
      );


      form.append(
        "delivery_location2",
        data.delivery_location2 || ""
      );


      form.append(
        "delivery_location3",
        data.delivery_location3 || ""
      );

      // categories below

      categories.forEach(item => {

        form.append(
          "categories",
          item
        )

      });

      const res =
        await supplierCompleteProfile(form);


      console.log(res.data);


      navigate(
        "/supplier/dashboard"
      );


    }
    catch (error) {

      console.log(
        error.response?.data
      )

    }

  }

  return (

    <div className="
min-h-screen
bg-[#f7f5ef]
py-6
md:py-10
">

      <div className="
max-w-5xl
mx-auto
px-3
sm:px-5
">

        <div className="
bg-[#064e3b]
text-white
rounded-2xl
p-5
md:p-8
mb-6
flex
flex-col
md:flex-row
gap-5
justify-between
">


          <div>

            <p className="text-sm">
              SUPPLIER SETUP
            </p>


            <h1 className="
text-2xl
md:text-3xl
font-bold
">

              Complete your profile

            </h1>


            <p>
              Add details needed to activate your dashboard
            </p>


          </div>

          <div className="
border
rounded-xl
p-3
w-full
md:w-32
text-center
">

            <h1 className="
text-3xl
font-bold
">

              {progress}%

            </h1>


            <p className="text-xs">
              Profile Complete
            </p>



            <div className="
h-2
bg-gray-300
rounded-full
mt-3
overflow-hidden
">


              <div
                className="
bg-white
h-full
transition-all
"
                style={{
                  width: `${progress}%`
                }}
              />


            </div>


            <p className="
text-xs
mt-3
">

              Step 1 of 1

            </p>

          </div>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="
space-y-6
md:space-y-8
">
          {/* BASIC PROFILE */}

          <div className="
bg-white
rounded-3xl
p-5
md:p-8
shadow-md
">

            <h2 className="text-xl font-bold">
              Store / Profile Details
            </h2>


            <div className="border-b my-5" />

            <label className="
border
border-dashed
rounded-2xl
p-5
flex
flex-col
sm:flex-row
gap-5
cursor-pointer
">


              <div className="
w-20
h-20
rounded-xl
bg-green-50
overflow-hidden
flex
items-center
justify-center
">


                {
                  storePreview ?

                    <img
                      src={storePreview}
                      className="
w-full
h-full
object-cover
"
                    />

                    :

                    <FaBuilding className="text-3xl text-green-700" />

                }


              </div>


              <div>

                <p className="font-semibold">
                  Upload Store Image
                </p>

                <p className="text-sm text-gray-500">
                  Business image
                </p>

              </div>


              <input

                type="file"

                hidden

                onChange={
                  e => handleImage(
                    e.target.files[0],
                    "store"
                  )
                }

              />


            </label>

            <div className="
grid
grid-cols-1
md:grid-cols-2
gap-4
mt-5
">


              <FormInput
                icon={<FaUser />}
                placeholder="Name"
                register={register}
                errors={errors}
                name="name"
              />

              <FormInput
                icon={<FaEnvelope />}
                placeholder="Email"
                register={register}
                errors={errors}
                name="email"
              />

              <FormInput
                icon={<FaPhone />}
                placeholder="Phone Number"
                register={register}
                errors={errors}
                name="phone"
              />

              <FormInput

                icon={<FaMapMarkerAlt />}

                placeholder="Pincode"

                register={register}

                errors={errors}

                name="pincode"

                onChange={(e) => {

                  register("pincode")
                    .onChange(e)

                  fetchLocation(
                    e.target.value
                  )

                }}

              />


            </div>

            <div className="relative mt-5">


              <FaMapMarkerAlt
                className="
absolute
left-4
top-5
text-green-700
"
              />

              <textarea

                {...register("address")}

                placeholder="Address"

                className="
w-full
min-h-[120px]
pl-12
p-4
rounded-2xl
border
resize-none
"

              />

              {
                errors.address &&
                <p className="text-red-500 text-sm">

                  {errors.address.message}

                </p>
              }


            </div>


          </div>

          {/* STORE PROFILE */}

          <div className="
bg-white
rounded-3xl
p-5
md:p-8
shadow-md
">

            <h2 className="text-xl font-bold">
              Supplier Store Profile
            </h2>


            <div className="border-b my-5" />



            <label className="
border
border-dashed
rounded-2xl
p-5
flex
flex-col
sm:flex-row
gap-5
cursor-pointer
">


              <div className="
w-20
h-20
rounded-xl
bg-green-50
overflow-hidden
flex
items-center
justify-center
">


                {
                  logoPreview ?

                    <img
                      src={logoPreview}
                      className="
w-full
h-full
object-cover
"
                    />

                    :

                    <FaBuilding className="text-3xl text-green-700" />

                }


              </div>



              <div>

                <p className="font-semibold">
                  Upload Store Logo
                </p>

              </div>



              <input

                type="file"

                hidden

                onChange={
                  e => handleImage(
                    e.target.files[0],
                    "logo"
                  )
                }

              />


            </label>





            <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
mt-5
">



              <FormInput

                icon={<FaBuilding />}

                placeholder="Store Name"

                register={register}

                errors={errors}

                name="store_name"

              />



              <FormInput

                icon={<FaIdCard />}

                placeholder="GSTIN"

                register={register}

                errors={errors}

                name="gstin"

              />



              <FormInput

                icon={<FaIdCard />}

                placeholder="PAN"

                register={register}

                errors={errors}

                name="pan"

              />



              <FormInput

                icon={<FaMap />}

                placeholder="Website"

                register={register}

                errors={errors}

                name="website"

              />





              <select
                {...register("business_type")}
                className="
input
border
rounded-xl
p-3
"
              >

                <option value="">
                  Business Type
                </option>

                <option>
                  Manufacturer
                </option>

                <option>
                  Supplier
                </option>

                <option>
                  Distributor
                </option>

              </select>





              <input

                type="number"

                {...register(
                  "registration_year",
                  {
                    valueAsNumber: true
                  }
                )}

                placeholder="Registration Year"

              />



            </div>



            <textarea

              {...register("about")}

              placeholder="About Store"

              className="
input
border
rounded-xl
p-3
w-full
mt-5
"

            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">


              <FormInput
                placeholder="Delivery Location 1"
                register={register}
                errors={errors}
                name="delivery_location1"
              />


              <FormInput
                placeholder="Delivery Location 2"
                register={register}
                errors={errors}
                name="delivery_location2"
              />


              <FormInput
                placeholder="Delivery Location 3"
                register={register}
                errors={errors}
                name="delivery_location3"
              />


            </div>



          </div>

          {/* CATEGORY */}



          <div className="
bg-white
rounded-3xl
p-5
md:p-8
shadow-md
">


            <h2 className="text-xl font-bold">
              Product Categories
            </h2>


            <div className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-3
mt-5
">


              {
                categoryList.map(item => (


                  <label
                    key={item}
                    className="
border
rounded-xl
p-3
cursor-pointer
"
                  >


                    <input

                      type="checkbox"

                      checked={
                        categories.includes(item)
                      }

                      onChange={
                        () => handleCategory(item)
                      }

                    />


                    <span className="ml-2">
                      {item}
                    </span>



                  </label>


                ))
              }



            </div>


          </div>


          {/* DOCUMENTS */}



          <div className="
bg-white
rounded-3xl
p-5
md:p-8
shadow-md
">


            <h2 className="text-xl font-bold">
              Documents
            </h2>



            <div
              className="
grid
grid-cols-1
md:grid-cols-2
gap-4
mt-5
"
            >


              {

                [
                  "Shop License",
                  "GST Certificate",
                  "PAN Card",
                  "Trade License",
                  "Material Quality Certificate",
                  "Insurance Certificate"

                ].map((doc) => (


                  <label

                    key={doc}

                    className="
border
border-dashed
rounded-xl
h-32
p-4
cursor-pointer
flex
items-center
gap-4
hover:bg-green-50
hover:border-green-700
transition
"

                  >


                    <div

                      className="
w-12
h-12
rounded-lg
bg-green-100
flex
items-center
justify-center
"

                    >

                      <FaFilePdf

                        className="
text-green-700
text-xl
"

                      />

                    </div>
                    <div>


                      <p className="
font-semibold
text-sm
">

                        {doc}
                      </p>
                      <p className="
text-xs
text-gray-500
">

                        Upload PDF/Image

                      </p>
                    </div>
                    <input

                      type="file"

                      hidden

                      accept="
.pdf,.jpg,.jpeg,.png
"
                      onChange={(e) => {


                        const file = e.target.files[0];


                        if (file) {

                          console.log(
                            doc,
                            file
                          );

                        }


                      }}


                    />


                  </label>


                ))


              }

            </div>


          </div>

          <button

            type="submit"

            className="
w-full
bg-[#064e3b]
text-white
py-4
rounded-2xl
font-semibold
"

          >


            Complete Profile
          </button>
        </form>
      </div>
    </div>

  )

}
const FormInput = ({
  icon,
  placeholder,
  register,
  errors,
  name,
  type = "text",
  onChange
}) => {

  return (

    <div>
      <div className="relative">

        <div className="
absolute
left-4
top-4
text-green-700
">
          {icon}

        </div>
        <input

          type={type}

          {...register(name)}

          onChange={onChange}

          placeholder={placeholder}

          className="
w-full
pl-12
py-3
md:py-4
rounded-2xl
border
outline-none
"
        />
      </div>
      {

        errors[name] &&

        <p className="
text-red-500
text-sm
mt-1
">

          {errors[name].message}

        </p>
      }
    </div>
  )
}
export default SupplierCompleteProfile;