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
 * Your code here ⤵️
 */

getRandomUsers().then(users => console.log(users));