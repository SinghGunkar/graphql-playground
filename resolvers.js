const db = require("./db")

const Query = {
    users: () => db.friends.list()
}

module.exports = { Query }
