import axios from "axios";

export const postAttemptedQuiz = async ({ quiz, userDataDispatch }) => {
    try {
        const res = await axios.post('/api/user/quizzes-attempted', { quiz });
        if(res.status===201)
        userDataDispatch({type: "ATTEMPTED_QUIZZES_HANDLER", payload: res.data.quizzesAttempted})
    }
    catch (e) {
        console.log('error', e)
    }
}