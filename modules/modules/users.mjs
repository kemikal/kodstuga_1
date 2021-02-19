export let users = ["Janne", "Kalle"];

export let userName = "Anna";

export let isAdmin;

export function addUser(user) {

    // LS Hämta

    // LS Ändra
    users.push(user);

    // LS Spara
}

export function setUserName(name) {
    return name + " är här!";
}

export function editUsers() {
    // EDIT user

}