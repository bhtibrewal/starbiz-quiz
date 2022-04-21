import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const [quiz, setQuiz] = useState();
    return(
        <QuizContext.Provider value={{quiz, setQuiz}} >
            {children}
        </QuizContext.Provider>
    );
}

export const useQuiz = () => {
    const context = useContext(QuizContext );
    if (!context) {
      throw new Error(`use useQuiz must be used inside a context provider`);
    }
    return context;
  };