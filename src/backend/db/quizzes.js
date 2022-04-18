import { v4 as uuid } from 'uuid';

/* 
quizzes data 
 */

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
                    "In The Force Awakens, which character has Darth Vader’s damaged mask?",
                options: ["Option 1", "Option 2", "Option 3", " Option 4"],
                answer: "Option 2",
                hint: "second",
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
    }
]