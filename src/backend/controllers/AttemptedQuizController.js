import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/* 
* This api handles posting the attempted quiz to the user
* POST request /api/user/attempted-quizzes
*/

export const postAttemptedQuizHandler = function (schema, request) {
    
    const user = requiresAuth.call(this, request);
    if (user) {
        const { quiz } = JSON.parse(request.requestBody);
        if (user.quizzesAttempted.some((item) => item._id === quiz._id)) {
            return new Response(
                409,
                {},
                {
                    errors: ["Quiz Already Attempted"],
                }
            );
        }
        user.quizzesAttempted.push({ ...quiz, attemptedOn: formatDate(), score: 0 });
        return new Response(201, {}, { quizzesAttempted: user.quizzesAttempted });
    }
    return new Response(
        404,
        {},
        {
            errors: ["The email you entered is not Registered. Not Found error"],
        }
    );
};


export const postResponseHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { option } = JSON.parse(request.requestBody);
        const {questionId, quizId} = request.params;
        const quiz = user.quizzesAttempted.find(quiz => quiz._id === quizId);
        const Question = quiz.questions.find(question=> question._id===questionId);
        Question.choice = option;
        return new Response(201, {}, { quizzesAttempted: user.quizzesAttempted });
    }
    return new Response(
        404,
        {},
        {
            errors: ["The email you entered is not Registered. Not Found error"],
        }
    );
};