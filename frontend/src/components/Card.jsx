import React, { useEffect, useState } from "react";
import axios from "axios";
import EditQuestion from "./EditQuestion";
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

  return <div></div>;
};

export default Card;
