// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField
} from "../../../../../../_metronic/_partials/controls";
import BackGround from "./100_1.jpg";
import axios from "axios";
import { TextField } from "@material-ui/core";

// Validation schema
const CustomerEditSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Firstname is required"),
  lastName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  userName: Yup.string().required("Username is required"),
  dateOfBbirth: Yup.mixed()
    .nullable(false)
    .required("Date of Birth is required"),
  ipAddress: Yup.string().required("IP Address is required")
});

const ingredientAPI = process.env.ingerdientAPI;
const apiKey = process.env.apiKey;

export function IngredientEditForm({
  saveCustomer,
  ingredient,
  actionsLoading,
  onHide
}) {
  const [query, setQuery] = useState([]);
  const [info, setInfo] = useState({});
  const [fat, setFat] = useState(0);
  const [calo, setCal] = useState(0);
  const [carb, setCarb] = useState(0);
  // const [ingredientApi, setIngredientApi] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await axios.get(
        `${ingredientAPI}search?query=lemon&apiKey=${apiKey}`
      );
      //https://api.spoonacular.com/food/ingredients/99184/information?apiKey=3d01ebdfea1b4a4ca4dbf3aed3152c6c&amount=100&unit=g
      const information = await axios.get(
        `${ingredientAPI}${results.data.response[0]}/information?apiKey=${apiKey}&amount=100&unit=g`
      );
      setInfo(information);
      const fat = information.nutrition.nutrients.find(
        ele => ele.title === "Fat"
      );
      setFat(fat.amount);
      const calo = information.nutrition.nutrients.find(
        ele => ele.title === "Calories"
      );
      setCal(calo.amount);
      const carb = information.nutrition.nutrients.find(
        ele => ele.title === "Carbohydrates"
      );
      setCarb(carb.amount);
      // setData(results.re);
    })();
  }, []);
  const handleQuery = title => setQuery(title);
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{ title: "hello" }}
        onSubmit={values => {
          saveCustomer(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  {/* First Name */}
                  <div className="col-lg-4">
                    <Field
                      name="title"
                      component={Input}
                      placeholder="Title"
                      label="Title"
                    />
                  </div>

                  <div className="col-lg-12">
                    <label>Fat:</label>
                    <input
                      disabled
                      value={fat}
                      id="filled-disabled"
                      defaultValue="fat value"
                      // className={classes.textField}
                    />
                  </div>

                  <div className="col-lg-8">
                    <label>Carb:</label>

                    <input
                      disabled
                      value={carb}
                      id="filled-disabled"
                      defaultValue="carb value"
                      // className={classes.textField}
                    />
                  </div>

                  <div className="col-lg-8">
                    <label>Calories:</label>

                    <input
                      disabled
                      value={calo}
                      id="filled-disabled"
                      defaultValue="carb value"
                      // className={classes.textField}
                    />
                  </div>

                  {/*<input*/}
                  {/*  disabled*/}
                  {/*  value{calo}*/}
                  {/*  id="filled-disabled"*/}
                  {/*  defaultValue="calories value"*/}
                  {/*  // className={classes.textField}*/}
                  {/*/>*/}
                  <div
                    className="image-input image-input-outline"
                    id="kt_image_1"
                  >
                    <div
                      className="image-input-wrapper"
                      style={{ backgroundImage: "url(" + BackGround + ")" }}
                    />

                    <input
                      onChange={event => {
                        event.persist();
                        setFieldValue("image", event.target.files[0]);
                      }}
                      type="file"
                      name="image"
                      accept=".png, .jpg, .jpeg"
                    />
                    <input type="hidden" name="profile_avatar_remove" />
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
