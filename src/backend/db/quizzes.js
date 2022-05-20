import { v4 as uuid } from 'uuid';

/* 
quizzes data 
 */
// The Office Quiz for true fans
export const quizzes = [
    {
        _id: uuid(),
        title: 'Getting To Know Javascript',
        level: 'Easy',
        categoryName: 'Javascript',
        image_src: "https://stackhowto.com/wp-content/uploads/2021/06/mcq-javascript-question-and-answer.png",
        questions: [
            {
                _id: uuid(),
                question:
                    "What does the Javascript “debugger” statement do?",
                options: ["It acts as a breakpoint in a program.",
                    "It will debug all the errors in program at runtime.",
                    "It will automatically debug the error in that statement.", "All of the above"],
                answer: "It acts as a breakpoint in a program.",
                hint: "hint",
            },
            {
                _id: uuid(),
                question:
                    "Which function is used to serialize an object into a JSON string in Javascript?",
                options: [" parse()",
                    "stringify()",
                    "convert()", "none"],
                answer: "stringify()",
                hint: "hint",
            },
            {
                _id: uuid(),
                question:
                    "In The Force Awakens, which character has Darth Vader’s damaged mask?",
                options: ["Option 1", "Option 2", "Option 3", " Option 4"],
                answer: "Option 2",
                hint: "second",
            }
        ]
    },
    {
        _id: uuid(),
        title: "You Don't Know Js",
        level: 'Hard',
        categoryName: 'Javascript',
        image_src: "https://stackhowto.com/wp-content/uploads/2021/06/mcq-javascript-question-and-answer.png",
        questions: [
            {
                _id: uuid(),
                question:
                    "In The Force Awakens, which character has Darth Vader’s damaged mask?",
                options: ["Option 1", "Option 2", "Option 3", " Option 4"],
                answer: "Option 2",
                hint: "second",
            },
        ]
    },
    {
        _id: uuid(),
        title: "Learning React",
        level: 'Intermediate',
        categoryName: 'React',
        image_src: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png",
        questions: [
            {
                _id: uuid(),
                question:
                    "Which of the following are the advantages of React.js?",
                options: ["React.js can increase the application's performance with Virtual DOM.",
                    "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                    " React.js can render both on client and server side.",
                    "All of the above"],
                answer: "All of the above",
                hint: "hint",
            },

        ]
    },
    {
        _id: uuid(),
        title: "CSS Flex",
        level: 'Intermediate',
        categoryName: 'CSS',
        image_src: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png",
        questions: [
            {
                _id: uuid(),
                question:
                    "Which of the following are the advantages of React.js?",
                options: ["React.js can increase the application's performance with Virtual DOM.",
                    "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
                    " React.js can render both on client and server side.",
                    "All of the above"],
                answer: "All of the above",
                hint: "hint",
            },
        ]
    }
]



