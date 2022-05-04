import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getQuestion = await axios.get("http://localhost:8800/getquestions");
      setQuestion(getQuestion.data);
    };
    getData();
  }, []);

  const HandleMatch = () => {};
  console.log(question);
  return (
    <>
      {question.map((item) => (
        <>
          <div
            className="card"
            style={{ width: "18rem", align: "center", marginLeft: "40%" }}
          >
            <div className="card-body">
              <h5 className="card-title">{item?.question}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1">
                  {item?.option1}
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2">
                  {item?.option2}
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio3">
                  {item?.option3}
                </label>
              </div>
            </div>
            <button className="btn btn-primary" onClick={HandleMatch}>
              {" "}
              Next
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
