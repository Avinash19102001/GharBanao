import * as yup from "yup";


export const productSchema = yup.object({

    productName: yup
        .string()
        .required("Product name required"),


    company: yup
        .string()
        .required("Company required"),


    price: yup
        .number()
        .typeError("Enter price")
        .positive()
        .required("Price required"),


    stock: yup
        .number()
        .typeError("Enter stock")
        .min(0)
        .required("Stock required"),


    unit: yup
        .string()
        .required("Select unit")

})