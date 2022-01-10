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
async function setUsersInTable() {
    var users = await getRandomUsers();

    var usersTable = document.getElementById('users-table');
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement('tr');
        usersTable.appendChild(tr);

        var userAvatar = users[i].avatar;
        var img = document.createElement('img');
        img.src = userAvatar;

        var tdAvatar = document.createElement('td');
        tdAvatar.appendChild(img);
        tr.appendChild(tdAvatar);

        var tdName = document.createElement('td');
        tdName.innerHTML = users[i].last_name;
        tr.appendChild(tdName);
        
        var tdFirstname = document.createElement('td');
        tdFirstname.innerHTML = users[i].first_name;
        tr.appendChild(tdFirstname);
        
        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = users[i].email;
        tr.appendChild(tdEmail);
    }
}

setUsersInTable().then(console.log("Data loaded and filled successfully"));