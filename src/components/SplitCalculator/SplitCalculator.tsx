// import {
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Grid2,
//   MenuItem,
//   TextField,
// } from "@mui/material";
// import { Formik } from "formik";
// import { useState } from "react";
// import * as yup from "yup";

// const SplitCalculator = () => {
//   const [additionalExpenses, setAdditionalExpenses] = useState<boolean>(true);
//   const [splitEvenly, setSplitEvenly] = useState<boolean>(false);

//   const handleSubmit = async (
//     values: {
//       amountToSplit: string;
//       waysToSplit: string;
//       additionalExpenses: string;
//     },
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
//   ) => {
//     console.log(values);
//     const splitRent = Number(values.amountToSplit) / Number(values.waysToSplit);
//     const totalSplit = splitRent + values.additionalExpenses;

//     console.log(totalSplit);
//     setSubmitting(false); // Reset submitting status
//   };

//   const validationSchema = yup.object().shape({
//     amountToSplit: yup
//       .string()
//       .required("Amount to split is required.")
//       .matches(/^[0-9]+$/, "Amount must be a number."),
//     waysToSplit: yup
//       .string()
//       .required()
//       .matches(/^[0-9]+$/, "Ways to split must be a number."),
//     additionalExpenses: yup
//       .string()
//       .required()
//       .matches(/^[0-9]+$/, "Ways to split must be a number."),
//   });

//   const initialValues = {
//     amountToSplit: "",
//     waysToSplit: "",
//     additionalExpenses: "",
//   };
//   return (
//     <div className="sm:4/5 flex w-full flex-col rounded-md border border-slate-200 p-3 shadow">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema} // Pass Yup schema here
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Grid2 container spacing={2}>
//               <TextField
//                 id="amountToSplit"
//                 name="amountToSplit"
//                 label="Amount To Split"
//                 variant="outlined"
//                 fullWidth
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.amountToSplit}
//                 error={touched.amountToSplit && Boolean(errors.amountToSplit)}
//                 helperText={touched.amountToSplit && errors.amountToSplit}
//               />
//               <TextField
//                 id="waysToSplit"
//                 name="waysToSplit"
//                 label="Ways To Split"
//                 variant="outlined"
//                 fullWidth
//                 select
//                 defaultValue={2}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.waysToSplit}
//                 error={touched.waysToSplit && Boolean(errors.waysToSplit)}
//                 helperText={touched.waysToSplit && errors.waysToSplit}
//               >
//                 <MenuItem value={1}>1</MenuItem>
//                 <MenuItem value={2}>2</MenuItem>
//                 <MenuItem value={3}>3</MenuItem>
//                 <MenuItem value={4}>4</MenuItem>
//                 <MenuItem value={5}>5</MenuItem>
//                 <MenuItem value={6}>6</MenuItem>
//               </TextField>
//               <Grid2 container sx={{ width: "100%" }}>
//                 <FormControl>
//                   <FormControlLabel
//                     label="Split Evenly"
//                     control={
//                       <Checkbox
//                         checked={splitEvenly}
//                         onChange={() => setSplitEvenly((prev) => !prev)}
//                       />
//                     }
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormControlLabel
//                     label="Additional Expenses"
//                     control={
//                       <Checkbox
//                         checked={additionalExpenses}
//                         onChange={() => setAdditionalExpenses((prev) => !prev)}
//                       />
//                     }
//                   />
//                 </FormControl>
//               </Grid2>
//               {splitEvenly && (
//                 <Grid2 container direction="column" sx={{ width: "100%" }}>
//                   {Array.from({ length: Number(values.waysToSplit) }).map(
//                     (_, i) => (
//                       <TextField
//                         key={i}
//                         id={`Person${i + 1}-percentage-id`}
//                         name={`person${i + 1}-percentage`}
//                         label={`Person ${i + 1} percentage`}
//                         variant="outlined"
//                         fullWidth
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.person}
//                         error={
//                           touched.additionalExpenses &&
//                           Boolean(errors.additionalExpenses)
//                         }
//                         helperText={
//                           touched.additionalExpenses &&
//                           errors.additionalExpenses
//                         }
//                       />
//                     ),
//                   )}
//                 </Grid2>
//               )}
//               {additionalExpenses && (
//                 <TextField
//                   id="additionalExpenses"
//                   name="additionalExpenses"
//                   label="Additional Expenses"
//                   variant="outlined"
//                   fullWidth
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.additionalExpenses}
//                   error={
//                     touched.additionalExpenses &&
//                     Boolean(errors.additionalExpenses)
//                   }
//                   helperText={
//                     touched.additionalExpenses && errors.additionalExpenses
//                   }
//                 />
//               )}
//             </Grid2>
//             <button
//               className="mt-4 rounded bg-slate-100 px-2 py-1 shadow duration-100 ease-in hover:bg-slate-200"
//               type="submit"
//               disabled={isSubmitting}
//             >
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SplitCalculator;

import {
  Checkbox,
  FormControlLabel,
  Grid2,
  MenuItem,
  TextField,
} from "@mui/material";
import { Formik, FormikHelpers, getIn } from "formik";
import { useState } from "react";
import * as yup from "yup";

// Define interfaces for form values and splits
interface Split {
  percentage: string;
}

interface FormValues {
  amountToSplit: string;
  waysToSplit: string;
  additionalExpensesEnabled: boolean;
  additionalExpenses: string;
  splits: Split[];
}

const SplitCalculator = () => {
  const [splitEvenly, setSplitEvenly] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) => {
    console.log("Form Values:", values);
    const splitRent = Number(values.amountToSplit) / Number(values.waysToSplit);
    const totalAdditional = values.additionalExpensesEnabled
      ? Number(values.additionalExpenses)
      : 0;
    const totalSplit = splitRent + totalAdditional;

    console.log("Split Rent:", splitRent);
    console.log("Total Additional Expenses:", totalAdditional);
    console.log("Total Split:", totalSplit);
    setSubmitting(false); // Reset submitting status
  };

  // Define Yup validation schema
  const validationSchema = yup.object().shape({
    amountToSplit: yup
      .string()
      .required("Amount to split is required.")
      .matches(/^[0-9]+$/, "Amount must be a number."),
    waysToSplit: yup
      .string()
      .required("Ways to split is required.")
      .matches(/^[0-9]+$/, "Must be a number."),
    additionalExpensesEnabled: yup.boolean(),
    additionalExpenses: yup
      .string()
      .when(
        "additionalExpensesEnabled",
        (additionalExpensesEnabled, schema) => {
          return additionalExpensesEnabled
            ? schema
                .required("Additional expenses are required.")
                .matches(/^[0-9]+$/, "Must be a number.")
            : schema;
        },
      ),
    splits: yup.array().of(
      yup.object().shape({
        percentage: yup
          .string()
          .required("Percentage is required")
          .matches(/^[0-9]+$/, "Must be a number."),
      }),
    ),
  });

  // Initialize form values
  const initialValues: FormValues = {
    amountToSplit: "",
    waysToSplit: "2", // Default value
    additionalExpensesEnabled: false,
    additionalExpenses: "",
    splits: Array(2).fill({ percentage: "" }), // Initialize splits based on waysToSplit
  };

  return (
    <div className="sm:4/5 flex w-full flex-col rounded-md border border-slate-200 p-3 shadow">
      <Formik<FormValues>
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              {/* Amount To Split */}
              <TextField
                id="amountToSplit"
                name="amountToSplit"
                label="Amount To Split"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amountToSplit}
                error={
                  getIn(touched, "amountToSplit") &&
                  Boolean(getIn(errors, "amountToSplit"))
                }
                helperText={
                  getIn(touched, "amountToSplit") &&
                  getIn(errors, "amountToSplit")
                }
              />

              {/* Ways To Split */}
              <TextField
                id="waysToSplit"
                name="waysToSplit"
                label="Ways To Split"
                variant="outlined"
                fullWidth
                select
                onChange={(e) => {
                  handleChange(e);
                  const newWaysToSplit = Number(e.target.value);
                  setFieldValue(
                    "splits",
                    Array(newWaysToSplit).fill({ percentage: "" }),
                  );
                }}
                onBlur={handleBlur}
                value={values.waysToSplit}
                error={
                  getIn(touched, "waysToSplit") &&
                  Boolean(getIn(errors, "waysToSplit"))
                }
                helperText={
                  getIn(touched, "waysToSplit") && getIn(errors, "waysToSplit")
                }
              >
                {[...Array(6)].map((_, i) => (
                  <MenuItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </MenuItem>
                ))}
              </TextField>

              {/* Split Evenly Checkbox */}
              <FormControlLabel
                label="Split Evenly"
                control={
                  <Checkbox
                    checked={splitEvenly}
                    onChange={() => setSplitEvenly((prev) => !prev)}
                  />
                }
              />

              {/* Dynamic Split Percentage Fields */}
              {!splitEvenly && (
                <Grid2 container direction="column" sx={{ width: "100%" }}>
                  {Array.from({ length: Number(values.waysToSplit) }).map(
                    (_, i) => (
                      <TextField
                        key={i}
                        id={`splits.${i}.percentage`}
                        name={`splits[${i}].percentage`}
                        label={`Person ${i + 1} Percentage`}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.splits[i]?.percentage || ""}
                        error={
                          getIn(touched, `splits[${i}].percentage`) &&
                          Boolean(getIn(errors, `splits[${i}].percentage`))
                        }
                        helperText={
                          getIn(touched, `splits[${i}].percentage`) &&
                          getIn(errors, `splits[${i}].percentage`)
                        }
                      />
                    ),
                  )}
                </Grid2>
              )}

              {/* Additional Expenses Checkbox */}
              <FormControlLabel
                label="Additional Expenses"
                control={
                  <Checkbox
                    checked={values.additionalExpensesEnabled}
                    onChange={(e) =>
                      setFieldValue(
                        "additionalExpensesEnabled",
                        e.target.checked,
                      )
                    }
                  />
                }
              />

              {/* Additional Expenses Input */}
              {values.additionalExpensesEnabled && (
                <TextField
                  id="additionalExpenses"
                  name="additionalExpenses"
                  label="Additional Expenses"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additionalExpenses}
                  error={
                    getIn(touched, "additionalExpenses") &&
                    Boolean(getIn(errors, "additionalExpenses"))
                  }
                  helperText={
                    getIn(touched, "additionalExpenses") &&
                    getIn(errors, "additionalExpenses")
                  }
                />
              )}
            </Grid2>
            <button
              className="mt-4 rounded bg-slate-100 px-2 py-1 shadow duration-100 ease-in hover:bg-slate-200"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SplitCalculator;
