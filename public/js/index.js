import { User } from './users.js';

class UsersTable {
    users = Array();

    constructor() {
        this.init();
    }

    async init() {
        //Adding a new listener on click to load new users
        document.getElementById('reload-button').addEventListener('click', async () => {
            await this.initializeUsers();
        });

        await this.initializeUsers();
    }

    /**
     *  @description Return list for random users
     */
    async getRandomUsers() {
        let result = Array();

        try {
            const res = await axios.get("https://random-data-api.com/api/users/random_user?size=100");
            res.data.forEach(element => {
                //Changing avatar set and size
                let avatarParameters = element.avatar.split('?', 1);
                let newParameters = '?size=100x100&set=set4';
                let userAvatar = avatarParameters.concat(newParameters);

                let user = new User(
                    element.uid,
                    userAvatar,
                    element.last_name,
                    element.first_name,
                    element.email
                );

                result.push(user);
            });
        } catch (err) {
            console.error(`[INDEX JS ERROR] : ${err}`);
        }

        return result;
    }

    async initializeUsers() {
        this.users = await this.getRandomUsers();
        this.loadUsers();
    }

    loadUsers() {
        let tbody = document.getElementById('users-tbody');

        // Removing all elements in users-table's body
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        // Filling users-table's body with users' informations
        this.fillUsersTable(this.users);
    }

    /**
     * @description Fill the table with users' informations
     */
    fillUsersTable(users) {
        let tbody = document.getElementById('users-tbody');
        
        users.forEach(user => {
            let tr = document.createElement('tr');
            tr.setAttribute('id', user.uid);

            // -------------------- Setting Avatar -------------------------
            let tdAvatar = document.createElement('td');
            let avatarImg = document.createElement('img');
            avatarImg.src = user.avatar;
            tdAvatar.appendChild(avatarImg);

            tr.appendChild(tdAvatar);

            // -------------------- Setting Lastname -----------------------
            let tdLastname = document.createElement('td');
            tdLastname.innerHTML = user.lastname;

            tr.appendChild(tdLastname);

            // -------------------- Setting Firstname ----------------------
            let tdFirstname = document.createElement('td');
            tdFirstname.innerHTML = user.firstname;

            tr.appendChild(tdFirstname);

            // ---------------------- Setting email ------------------------
            let tdEmail = document.createElement('td');
            tdEmail.innerHTML = user.email;

            tr.appendChild(tdEmail);

            // ---------------------- Delete button ------------------------
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Supprimer";
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                this.deleteUser(tr.id);
            });

            let tdActions = document.createElement('td');
            tdActions.appendChild(deleteButton);

            tr.appendChild(tdActions);

            tbody.appendChild(tr);
        });
    }

    /**
     * @description Delete a user knowing its uid 
     */
    deleteUser(uid) {
        let userToRemoveIndex = this.users.findIndex(user => user.uid === uid);
        this.users.splice(userToRemoveIndex, 1);

        this.loadUsers();
    }
}

new UsersTable();