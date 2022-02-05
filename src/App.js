import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

const App = () => {
  const [details, setdetails] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setdetails(...details, values);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Visitor Registration Form Using React Hooks</h2>
      {submitted ? (
        <Card details={details} />
      ) : (
        <Form handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
