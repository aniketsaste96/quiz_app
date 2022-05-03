import React, { useState } from "react";
import axios from "axios";

// dont use curly braces around axios
const CreateQuestions = () => {
  const [questions, setQuestions] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    answer: "",
  });
  const { question, option1, option2, option3, answer } = questions;
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuestions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //   console.log(questions);

  const HandleCreate = async (e) => {
    e.preventDefault();
    const dataCreated = await axios.post(
      "http://localhost:8800/createquestions",
      questions
    );
    if (dataCreated) {
      alert("Data Stored Successfully!!!");
      setQuestions({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        answer: "",
      });
    }
    console.log(questions);
  };
  return (
    <div className="col-md-6 mt-5">
      <form>
        <div className="form-group ">
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            placeholder="Enter Question"
            onChange={HandleChange}
            value={question}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="option1"
            name="option1"
            placeholder="Option 1"
            onChange={HandleChange}
            value={option1}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="option2"
            name="option2"
            placeholder="Option 2"
            onChange={HandleChange}
            value={option2}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="option3"
            name="option3"
            placeholder="Option 3 "
            onChange={HandleChange}
            value={option3}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="answer"
            name="answer"
            placeholder="Enter Ans"
            onChange={HandleChange}
            value={answer}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={HandleCreate}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateQuestions;
