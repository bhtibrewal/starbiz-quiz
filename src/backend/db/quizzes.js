import { v4 as uuid } from 'uuid';

/* 
quizzes data 
 */
// The Office Quiz for true fans
export const quizzes = [
    {
        _id: uuid(),
        title: 'Friends Series',
        level: 'Easy',
        categoryName: 'TV show',
        questions: [
            {
                _id: uuid(),
                question:
                    "How many sisters does Joe have?",
                options: ["7", "5", "2", " none"],
                answer: "7",
                hint: "hint",
            },
            {
                _id: uuid(),
                question:
                "What instrument did Ross intend to play at Monica and Chandler’s wedding?",
                options: ["Keyboard", "Drunks", "Saxophone", "Bagpipes"],
                answer: "Bagpipes",
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
        title: 'The Office Quiz for true fans',
        level: 'Easy',
        categoryName: 'TV show',
        questions:[
            {
                _id: uuid(),
                question:
                    "In The Force Awakens, which character has Darth Vader’s damaged mask?",
                options: ["Option 1", "Option 2", "Option 3", " Option 4"],
                answer: "Option 2",
                hint: "second",
            },
        ]
    }
]