import { Field, FieldProps, Form, Formik } from "formik";
import { database } from "@/app";
import Swal from "sweetalert2";
import * as Yup from "yup";
import CustomInputField from "../core/CustomInputField";

const ContactUsForm = () => {
  const ContactForm = [
    {
      key: "1",
      name: "name",
      label: (
        <>
          Name<span className="text-red-500">*</span>
        </>
      ),
      placeholder: "Enter Your Name",
      initialValue: "",
      type: "text",
      validationSchema: Yup.string()
        .required("Name is required.")
        .min(3, "Name must be at least 3 characters long.")
        .matches(/^[A-Za-z\s]+$/, "Name must be only alphabets"),
      className: "col-span-12",
    },

    {
      key: "2",
      name: "email",
      placeholder: "Enter Your Email",
      label: (
        <>
          Email Id<span className="text-red-500">*</span>
        </>
      ),
      initialValue: "",
      type: "text",
      validationSchema: Yup.string()
        .email("Invalid Email")
        .required("E-mail is required"),
      className: "md:col-span-6 col-span-12",
      disabled: true,
    },

    {
      key: "3",
      name: "phone",
      label: (
        <>
          Phone Number<span className="text-red-500">*</span>
        </>
      ),
      placeholder: "Enter Your Phone Number",
      type: "number",
      validationSchema: Yup.string()
        .required("Phone Number is Required!")
        .test(
          "Test-valid-number",
          "Phone number must only contain digits",
          function (val) {
            if (!isNaN(+val!)) return true;
            return false;
          }
        )
        .min(10, "Phone number is too short")
        .max(10, "Phone number is too long"),
      initialValue: "",
      isEditable: true,
      className: "md:col-span-6 col-span-12",
    },
    {
      key: "4",
      name: "companyName",
      label: "Company Name",
      placeholder: "Company Name",
      type: "string",
      initialValue: "",
      className: "col-span-12",
    },
    {
      key: "5",
      name: "message",
      label: "Message",
      placeholder: "Message",
      type: "text_area",
      validationSchema: Yup.string(),
      initialValue: "",
      required: true,
      multiline: true,
      rows: 6,
      className: "col-span-12",
    },
  ];

  const initialValues = ContactForm?.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  }, {} as any);
  const validationSchema = ContactForm?.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as any);

  const handleSubmit = async (
    values: any,
    props: { resetForm: () => void }
  ) => {
    try {
      // return console.log("values-------------", values);
      await database.push("contact", {
        ...values,
        status: "PENDING",
      });
      props.resetForm();
      Swal.fire("Success", "Message sent successfully", "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="">
      <div className="w-full flex flex-col gap-4">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object(validationSchema)}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full grid grid-cols-12 gap-10 overflow-hidden">
              {ContactForm.map((inputItem) => (
                <Field name={inputItem.name} key={inputItem.key}>
                  {(props: FieldProps<string>) => (
                    <div
                      className={`flex w-full flex-col gap-1 justify-center ${inputItem.className}`}
                    >
                      {/* <div className="text-sm">{inputItem.label}</div> */}
                      <div className="w-full">
                        <CustomInputField
                          key={inputItem?.key}
                          id={inputItem?.key}
                          name={inputItem?.name}
                          variant="standard"
                          type={inputItem?.type}
                          fullWidth
                          placeholder={
                            formik.values[inputItem?.name]
                              ? ""
                              : inputItem?.placeholder
                          }
                          formik={formik}
                          value={formik?.values[inputItem?.name]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={Boolean(
                            formik?.touched[inputItem?.name] &&
                              formik?.errors[inputItem?.name]
                          )}
                          helperText={
                            formik?.touched[inputItem?.name] &&
                            (formik?.errors[inputItem?.name] as string)
                          }
                        />
                      </div>
                    </div>
                  )}
                </Field>
              ))}
              <button
                type="submit"
                title="Complete Registration"
                className="bg-primary  text-white p-2 w-full col-span-3"
              >
                SUBMIT
              </button>
              <div className="w-full"></div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactUsForm;
