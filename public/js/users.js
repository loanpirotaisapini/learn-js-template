export class User {
    uid;
    avatar;
    lastname;
    firstname;
    email;

    constructor(uid, avatar, lastname, firstname, email) {
        this.uid = uid;
        this.avatar = avatar;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
    }
}
