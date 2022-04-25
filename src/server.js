import { Server, Model, RestSerializer } from "miragejs";
import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quizzes";

import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { getQuizHandler, getQuizzesHandler } from "./backend/controllers/QuizController";
import { postAttemptedQuizHandler, postResponseHandler,  getAttemptedQuizHandler } from "./backend/controllers/AttemptedQuizController";


export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    serializers: {
      application: RestSerializer,
    },

    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      user: Model,
      quizzes: Model,
      quizzesAttempted: Model,
      level: Model,
      score: Model
    },

    seeds(server) {
      server.logging = false;
      quizzes.forEach((item) => {
        server.create("quiz", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          quizzesAttempted: [],
          level: 'Beginner'
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // quizzes route (public route)
      this.get('/quizzes', getQuizzesHandler.bind(this));
      this.get('/quizzes/:quizTitle', getQuizHandler.bind(this));

      // attempted quiz routes
      this.post('/user/quizzes-attempted', postAttemptedQuizHandler.bind(this));
      this.post('/user/quizzes-attempted/:quizId/:questionId', postResponseHandler.bind(this));
      this.get('/user/attempted-quizzes/:quizTitle', getAttemptedQuizHandler.bind(this));
    },
  });
  return server;
}
