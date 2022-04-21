import axios from "axios";

export const postResponse = async ({ option, quizId, questionId }) => {
    try {
        const res = await axios.post(`/api/user/quizzes-attempted/${quizId}/${questionId}`, { option });
        console.log(res.data)
    }
    catch (e) {
        console.log('error', e)
    }
}