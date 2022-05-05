import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [datas, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    const getData = async () => {
      const getQuestion = await axios.get("http://localhost:8800/getquestions");
      setDatas(getQuestion.data[0]);
    };
    getData();
  }, []);

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
    } else {
      alert("Wrong ans!!!");
    }
  };

  console.log(datas);

  return (
    <>
      {datas?.map((item) => {
        return (
          <>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{item?.question}</h5>
                <p class="card-text">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(item?.option1)}
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value={item?.option1}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      {item?.option1}
                    </label>
                  </div>
                </p>
                <p class="card-text">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(item?.option2)}
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value={item?.option2}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      {item?.option2}
                    </label>
                  </div>
                </p>
                <p class="card-text">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(item?.option3)}
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value={item?.option3}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      {item?.option3}
                    </label>
                  </div>
                </p>
                <button
                  href="#"
                  class="btn btn-primary"
                  onClick={() => compareAns(item?.answer)}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
