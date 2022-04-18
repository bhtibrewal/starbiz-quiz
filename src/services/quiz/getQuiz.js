import axios from "axios";

export const getQuiz = async ({setQuiz, quizTitle, showToast }) => {
    try {
        const res = await axios.get(`/api/quizzes/${quizTitle}`);
        setQuiz(res.data.quiz);
    }
    catch (e) {
        console.error(e);
    }
}