const { DataStore } = require("notarealdb")

const store = new DataStore("./data")

module.exports = {
    friends: store.collection("users")
}
