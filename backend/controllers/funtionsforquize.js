const questionModel = require("../models/question")

const getQuestions = async (req, res) => {

    try {
        //getting data from db
        const questions = await questionModel.find({});

        if (questions) {
            res.status(200).json(questions);
        }
    } catch (error) {
        res.status(404).json({ message: error })
        console.log(error)
    }


}
const getQuestion = async (req, res) => {

    try {
        //getting data from db
        const questions = await questionModel.findById(req.params.id);

        if (questions) {
            res.status(200).json(questions);
        }
    } catch (error) {
        res.status(404).json({ message: error })
        console.log(error)
    }


}
const createQuestions = async (req, res) => {

    try {
        //getting data from db
        const question = new questionModel({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            answer: req.body.answer,

        });

        const createData = await question.save();
        //how do i know data is created
        if (createData) {
            res.status(200).send(createData)
        }
    } catch (error) {
        res.status(404).json({ message: error })
        console.log(error)
    }

}


const updateQuestion = async (req, res) => {
    try {
        //update question
        const question = await questionModel.findByIdAndUpdate(req.params.id, req.body)
        if (question) {
            res.status(200).send("Updated Successfully!!")
        }

    } catch (error) {
        res.status(400).json({ message: error })
        console.log(error)
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const question = await questionModel.findByIdAndDelete(req.params.id);
        if (question) {
            res.status(200).send("Deleted Successfully!!")
        }

    } catch (error) {
        res.status(400).json({ message: error })
        console.log(error)
    }
}



module.exports = { getQuestions, createQuestions, updateQuestion, deleteQuestion, getQuestion };