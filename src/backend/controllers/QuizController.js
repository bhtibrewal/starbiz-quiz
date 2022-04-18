import { Response } from "miragejs";

/**
 * All the routes related to Quizzes are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all quizzes in the db.
 * send GET Request at /api/quizzes/:quizId
 * */

export const getQuizzesHandler = function () {
    return new Response(200, {}, { quizzes: this.db.quizzes });
};

/**
 * This handler handles gets a quiz from db.
 * send GET Request at /api/quizzes/:quizId
 * */

export const getQuizHandler = function (schema, request) {
    const { quizTitle } = request.params;
    try {
        const quiz = schema.quizzes.findBy({ title: quizTitle });
        return new Response(200, {}, { quiz });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};
