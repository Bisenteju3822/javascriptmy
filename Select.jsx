import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Insert = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/relation/save";
    try {
      const res = await axios.post(api, input);
      console.log(res.data);
      message.info("The data is sent successfully");
    } catch (error) {
      console.log(error);
      console.log("An error occurred");
    }
  };

  return (
    <>
      <h1>This is insert</h1>
      Enter your username:
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleChange}
      />
      Enter your Email:
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleChange}
      />
      Enter your firstname:
      <input
        type="text"
        name="firstname"
        value={input.firstname}
        onChange={handleChange}
      />
      Enter your lastname:
      <input
        type="text"
        name="lastname"
        value={input.lastname}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Click
      </button>
    </>
  );
};

export default Insert;
