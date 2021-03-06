import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Bhavika",
    lastName: "Tibrewal",
    email: "bhtibrewal@gmail.com",
    password: "bhtib@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "guest@gmail.com",
    password: "guest@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
