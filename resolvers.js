const db = require("./db")

const Query = {
    users: () => db.users.list(),
    foods: () => db.foods.list()
}

const User = {
    foodsEaten: ({ foodsEaten }) => {
        const userFoodsEaten = db.foods
            .list()
            .filter(food => foodsEaten.includes(food.id))
        return userFoodsEaten
    }
}

module.exports = { Query, User }
