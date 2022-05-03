import React, { useEffect, useState } from "react";
import axios from "axios";
const EditQuestion = () => {
  const URL = "http://localhost:8800";
  const [selected, setSelected] = useState("");
  const [FetachedSelected, setFetachedSelected] = useState([]);
  const [counter, setCounter] = useState(0);
  const [questions, setQuestions] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    answer: "",
  });
  const [getQuestions, setGetQuestions] = useState([]);
  const { question, option1, option2, option3, answer } = questions;
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuestions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getData = async () => {
      const myQues = await axios.get(`${URL}/getquestions`);
      setGetQuestions(myQues.data);
    };

    getData();
  }, [counter]);

  const HandleEdit = async (item) => {
    setSelected(item);
    await axios
      .get(`${URL}/getquestion/${item}`)
      .then((res) => {
        setQuestions({
          question: res.data.question,
          option1: res.data.option1,
          option2: res.data.option2,
          option3: res.data.option3,
          answer: res.data.answer,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //update

  const handleUpdate = async (id) => {
    const isUpdated = await axios.put(`${URL}/updatequestion/${id}`, questions);

    if (isUpdated) {
      alert("Question Updated Successfully");
      setCounter(counter + 1);
    }
  };

  //delete

  const HandleDelete = async (item) => {
    const isDeleted = await axios.delete(`${URL}/deletequestion/${item}`);
    if (isDeleted) {
      alert("Question Deleted Successfully");
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <div className="container d-flex mt-5">
        <div className="col-md-6">
          <ul class="list-group">
            {getQuestions.map((item) => (
              <div>
                <div className="d-flex ">
                  <li class="list-group-item">{item?.question}</li>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => HandleEdit(item._id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => HandleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <div className="form-group">
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
            onClick={() => handleUpdate(selected)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
export default EditQuestion;
