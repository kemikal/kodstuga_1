import {setUserName} from "./users.mjs";

export function printUsers(users){
    for (let user in users) {
            document.body.insertAdjacentHTML("beforeend", "<br>" + setUserName(users[user]));
    }
}

