const db = require("./db")

const Query = {
    users: () => db.users.list(),
    foods: () => db.foods.list()
}

const User = {
    foodsEaten: user => {
        const userFoodIds = user.foodsEaten
        const userFoodsEaten = db.foods
            .list()
            .filter(food => userFoodIds.includes(food.id))
        return userFoodsEaten
    }
}

module.exports = { Query, User }
