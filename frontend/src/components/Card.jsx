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

  const HandleEdit = () => {};
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
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
