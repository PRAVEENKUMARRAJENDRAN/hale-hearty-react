import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import { clearMessage } from "../features/message/messageSlice";
import { BoxAnimation } from "../animations/boxAnimation";

export const Register = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { name, email, password } = formValue;
    setLoading(true);

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {

    return <Navigate to="/home" />;
  }

  return (
    <div style={{ overflowY: "visible" }}>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <div style={{ float: "left" }}>
                <BoxAnimation />
              </div>
              <br />
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Time to Track <br />
                <span style={{ color: "#94e3fe" }}>Your Progress</span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "#FFFFFF", fontFamily: "cursive" }}
              >
                "Values are related to our emotions, just as we practice
                physical hygiene to preserve our physical health, we need to
                observe emotional hygiene to preserve a healthy mind and
                attitudes"
              </p>

              <br />
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                  >
                    <Form>
                      <div className="form-outline mb-4">
                        <Field
                          type="name"
                          name="name"
                          id="form1Example3"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="email"
                          name="email"
                          id="form3Example3"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          email
                        </label>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <Field
                          type="password"
                          name="password"
                          id="form3Example4"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        disabled={loading}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        Sign up
                      </button>

                      <div className="text-center">
                        <p>
                          Already a member? <Link to="/login">Login</Link>
                        </p>
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
              <br />
              <div style={{ float: "right" }}>
                <BoxAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
