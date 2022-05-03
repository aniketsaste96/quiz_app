const { getQuestions, createQuestions, updateQuestion, deleteQuestion, getQuestion } = require('../controllers/funtionsforquize');

const router = require('express').Router();



router.route("/getquestions").get(getQuestions)
router.route("/getquestion/:id").get(getQuestion)
router.route("/createquestions").post(createQuestions)
router.route("/updatequestion/:id").put(updateQuestion)
router.route("/deletequestion/:id").delete(deleteQuestion)


module.exports = router;