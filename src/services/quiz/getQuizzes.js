import axios from "axios";

export const getQuizzes = async ({ setQuizzes}) => {
    try {
        const res = await axios.get('/api/quizzes');
        setQuizzes(res.data.quizzes)
    }
    catch (e) {
        console.error(e)
    }
}