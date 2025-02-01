import {
  Checkbox,
  FormControlLabel,
  Grid2,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, FormikHelpers, getIn } from 'formik';
import { useState } from 'react';
// import * as yup from 'yup';

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
interface DisplayTotalType {
  [key: string]: number;
  total: number;
}

const SplitCalculator = () => {
  const [splitEvenly, setSplitEvenly] = useState<boolean>(true);
  const [displayTotal, setDisplayTotal] = useState<DisplayTotalType>({
    total: 0,
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) => {
    console.log('Form Values:', values);
    setDisplayTotal({ total: 0 });
    const splitRent = Number(values.amountToSplit) / Number(values.waysToSplit);
    const totalAdditional = values.additionalExpensesEnabled
      ? Number(values.additionalExpenses) / Number(values.waysToSplit)
      : 0;

    if (splitEvenly) {
      const total = splitRent + totalAdditional;
      console.log('split evenly total', total);
    } else {
      const percentages = values.splits;
      let totalValue = 0;

      // First calculate and set all person amounts
      for (let i = 0; i < percentages.length; i++) {
        const amount =
          (Number(percentages[i].percentage) * Number(values.amountToSplit)) /
            100 +
          totalAdditional;

        totalValue += amount;

        console.log(`person${i}:`, amount);
        setDisplayTotal((prev) => ({
          ...prev,
          [`person${i}`]: amount,
        }));
      }

      // Then set the total after the loop is complete
      setDisplayTotal((prev) => ({
        ...prev,
        total: totalValue,
      }));
    }
    setSubmitting(false);
    console.log(displayTotal);
  };

  // Define Yup validation schema
  // const validationSchema = yup.object().shape({
  //   amountToSplit: yup.string().required('Amount to split is required.'),
  //   // .matches(/^[0-9]+$/, "Amount must be a number."),
  //   waysToSplit: yup.string().required('Ways to split is required.'),
  //   // .matches(/^[0-9]+$/, "Must be a number."),
  //   additionalExpensesEnabled: yup.boolean(),
  //   additionalExpenses: yup.string().optional(),
  //   // .when(
  //   //   "additionalExpensesEnabled",
  //   //   (additionalExpensesEnabled, schema) => {
  //   //     return additionalExpensesEnabled
  //   //       ? schema
  //   //         .required("Additional expenses are required.")
  //   //         .matches(/^[0-9]+$/, "Must be a number.")
  //   //       : schema;
  //   //   },
  //   // ),
  //   splits: yup
  //     .array()
  //     .of(
  //       yup.object().shape({
  //         percentage: yup
  //           .string()
  //           .required('Percentage is required')
  //           .matches(/^[0-9]+$/, 'Must be a number.'),
  //       }),
  //     )
  //     .optional(),
  // });

  // Initialize form values
  const initialValues: FormValues = {
    amountToSplit: '',
    waysToSplit: '2', // Default value
    additionalExpensesEnabled: false,
    additionalExpenses: '',
    splits: Array(2).fill({ percentage: '' }), // Initialize splits based on waysToSplit
  };

  const toggleSplitEvenly = (values: FormValues) => {
    setSplitEvenly((prev) => !prev);
    if (!splitEvenly) {
      values.splits.length = 0;
    }
  };

  console.log('Display Tota:', displayTotal.total);
  return (
    <div className="flex w-full flex-col rounded-md border border-slate-200 p-3 shadow sm:w-4/5 md:w-1/2">
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
                  getIn(touched, 'amountToSplit') &&
                  Boolean(getIn(errors, 'amountToSplit'))
                }
                helperText={
                  getIn(touched, 'amountToSplit') &&
                  getIn(errors, 'amountToSplit')
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
                    'splits',
                    Array(newWaysToSplit).fill({ percentage: '' }),
                  );
                }}
                onBlur={handleBlur}
                value={values.waysToSplit}
                error={
                  getIn(touched, 'waysToSplit') &&
                  Boolean(getIn(errors, 'waysToSplit'))
                }
                helperText={
                  getIn(touched, 'waysToSplit') && getIn(errors, 'waysToSplit')
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
                    onChange={() => toggleSplitEvenly(values)}
                  />
                }
              />

              {/* Dynamic Split Percentage Fields */}
              {!splitEvenly && (
                <Grid2 container direction="column" sx={{ width: '100%' }}>
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
                        value={values.splits[i]?.percentage || ''}
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
                        'additionalExpensesEnabled',
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
                    getIn(touched, 'additionalExpenses') &&
                    Boolean(getIn(errors, 'additionalExpenses'))
                  }
                  helperText={
                    getIn(touched, 'additionalExpenses') &&
                    getIn(errors, 'additionalExpenses')
                  }
                />
              )}
            </Grid2>
            <Grid2 container flexDirection="column" sx={{ py: 2 }}>
              {Object.entries(displayTotal)
                .filter(([key]) => key !== 'total')
                .map(([, value]: [key: string, value: number], index) => (
                  <Typography key={index} variant="subtitle1">
                    Person {index + 1}: {USDollar(value)}
                  </Typography>
                ))}
              {displayTotal?.total && (
                <div className="font-semibold">
                  Total: <span>{USDollar(displayTotal.total)}</span>
                </div>
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

const USDollar = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
}).format;
