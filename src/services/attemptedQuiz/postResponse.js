import axios from "axios";

export const postResponse = async ({ option, quizId, questionId, userDataDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/user/quizzes-attempted/${quizId}/${questionId}`, { option });
        if (res.status === 201) {
            userDataDispatch({ type: "ATTEMPTED_QUIZZES_HANDLER", payload: res.data.quizzesAttempted });
            showToast({ title: 'response posted', type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response?.error, type: 'error' })
    }
}