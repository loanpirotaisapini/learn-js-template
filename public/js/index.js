var users;

/**
 *  @description Return list for random users
 */
async function getRandomUsers() {
    try {
        const res = await axios.get("https://random-data-api.com/api/users/random_user?size=100");
        return res.data;
    } catch (err) {
        console.error(`[INDEX JS ERROR] : ${err}`);
    }
}

/**
 * @description Set the users informations in the table
 */
function setUsersInTable(users) {
    let tbody = document.getElementById('users-tbody');

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let userAvatar = users[i].avatar;
        let img = document.createElement('img');
        img.src = userAvatar;

        let tdAvatar = document.createElement('td');
        tdAvatar.appendChild(img);
        tr.appendChild(tdAvatar);

        let tdName = document.createElement('td');
        tdName.innerHTML = users[i].last_name;
        tr.appendChild(tdName);
        
        let tdFirstname = document.createElement('td');
        tdFirstname.innerHTML = users[i].first_name;
        tr.appendChild(tdFirstname);
        
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = users[i].email;
        tr.appendChild(tdEmail);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `deleteButton-${i}`);
        deleteButton.innerHTML = "Supprimer"
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            deleteUser(this.id);
        });

        let tdAction = document.createElement('td');
        tdAction.appendChild(deleteButton);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    }
}

/**
 * @description Refresh data in users table 
 */
function refreshData(users) {
    let tbody = document.getElementById('users-tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    setUsersInTable(users);
}

/**
 * @description Delete a user in table 
 */
function deleteUser(htmlId) {
    let index = htmlId.split('-');
    this.users.splice(index[1], 1);
    refreshData(this.users);
}

getRandomUsers()
.then(users => { 
    this.users = users;
    refreshData(this.users);
})