import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    mobile: "",
    person: "",
    visit: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!values.firstName) {
      isValid = false;
      errors["firstName"] = "Please enter your first name.";
    }
    if (!values.lastName) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }
    if (!values.email) {
      isValid = false;
      errors["email"] = "Please enter your email address";
    } else if (typeof values.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(values.email)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    if (values.mobile) {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(values.mobile)) {
        isValid = false;
        errors["mobile"] = "Please enter only number.";
      } else if (values.mobile.length != 10) {
        isValid = false;
        errors["mobile"] = "Please enter valid mobile number.";
      }
    }

    if (!values.person) {
      isValid = false;
      errors["person"] = "Please enter the name of person";
    }

    if (!values.visit) {
      isValid = false;
      errors["visit"] = "Please enter the purpose of visit";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      props.handleSubmit(values);
      setValues({
        firstName: "",
        lastName: "",
        company: "",
        jobTitle: "",
        email: "",
        mobile: "",
        person: "",
        visit: "",
      });
    }
  };

  return (
    <div className="division1">
      <form>
        <label htmlFor="firstName">First Name</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="text"
          name="firstName"
          id="fname"
          value={values.firstName}
          placeholder="Enter First Name..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.firstName}</span>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="Enter Last Name..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.lastName}</span>
        <br />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          value={values.company}
          placeholder="Enter Company..."
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">JobTitle</label>
        <input
          type="text"
          name="jobTitle"
          value={values.jobTitle}
          placeholder="Enter Job Title..."
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Enter Email..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.email}</span>
        <br />
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          name="mobile"
          value={values.mobile}
          placeholder="Enter Mobile Number..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.mobile}</span>
        <br />
        <label htmlFor="person">Meeting With</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="text"
          name="person"
          value={values.person}
          placeholder="Meeting With ..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.person}</span>
        <br />
        <label htmlFor="visit">PurposeOfVisit</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="text"
          name="visit"
          value={values.visit}
          placeholder="Enter Purpose Of Visit..."
          onChange={handleChange}
        />
        <span className="error-message">{errors.visit}</span>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
