import {printUsers} from "./modules/templates.mjs";
import {users, addUser, userName, isAdmin, setUserName} from "./modules/users.mjs";
import {land} from './modules/fetch.mjs';

land.then(data => console.log("from fetch module", data));

console.log(users);

addUser("Pelle");

console.log(users);

printUsers(users);

if (isAdmin) {
    console.log("Är admin");

} else {
    console.log("Är inte admin");
}

// SLÅ IHOP ARRAYS
// let arr1 = ["Anna", "Kalle", "Janne"];
// let arr2 = ["Simon", "Jocke", "Herman", "Otis"];

// let arr3 = arr1.concat(arr2)
// arr1 = arr2;

// console.log(arr1);
// console.log(arr3);