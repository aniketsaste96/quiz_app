import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [datas, setDatas] = useState([]);
  const [counter, setCounter] = useState(0);
  const [length, setLength] = useState(0);

  const [selectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    const getData = async () => {
      const getQuestion = await axios.get("http://localhost:8800/getquestions");
      setDatas(getQuestion.data[counter]);
      setLength(getQuestion.data.length);
      if (length === counter) {
        alert("Completed Successfully start again!!!");
        setCounter(0);
      }
    };
    getData();
  }, [counter]);

  // const handleSelected = (item) => {
  //   console.log(item);
  //   setSelectedItem(item);
  // };

  // const handleNext = () => {
  //   // if (selectedItem === question?.answer) {
  //   //   alert("Correct");
  //   // }
  //   console.log(selectedItem);
  //   console.log(question?.answer);
  // };

  const handleSelected = (item) => {
    setSelectedItem(item);
  };

  const compareAns = (ans) => {
    if (selectedItem === ans) {
      alert("correct ans!!!");
      setCounter(counter + 1);
    } else {
      alert("Wrong ans!!!");
    }
  };

  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{datas?.question}</h5>
          <p class="card-text">
            <div
              class="form-check"
              onClick={() => handleSelected(datas?.option1)}
            >
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value={datas?.option1}
              />
              <label class="form-check-label" for="exampleRadios2">
                {datas?.option1}
              </label>
            </div>
          </p>
          <p class="card-text">
            <div
              class="form-check"
              onClick={() => handleSelected(datas?.option2)}
            >
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value={datas?.option2}
              />
              <label class="form-check-label" for="exampleRadios2">
                {datas?.option2}
              </label>
            </div>
          </p>
          <p class="card-text">
            <div
              class="form-check"
              onClick={() => handleSelected(datas?.option3)}
            >
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value={datas?.option3}
              />
              <label class="form-check-label" for="exampleRadios2">
                {datas?.option3}
              </label>
            </div>
          </p>
          <button
            href="#"
            class="btn btn-primary"
            onClick={() => compareAns(datas?.answer)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
