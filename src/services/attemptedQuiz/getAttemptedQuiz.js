import axios from "axios";

export const  getAttemptedQuiz = async ({ setQuiz, quizTitle, showToast }) => {
    try {
        const res = await axios.get(`/api/user/attempted-quizzes/${quizTitle}`);
        setQuiz(res.data.quiz);
    }
    catch (e) {
        console.error(e);
    }
}