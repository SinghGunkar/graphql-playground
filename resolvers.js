const db = require("./db")

const Query = {
    user: (root, args) => db.users.get(args.id),
    users: () => db.users.list(),
    food: (root, args) => db.foods.get(args.id),
    foods: () => db.foods.list()
}

const Mutation = {
    createUser: (
        root,
        { id, name, age, occupation, location, description, foodsEaten }
    ) => {
        return db.users.create({
            id,
            name,
            age,
            occupation,
            location,
            description,
            foodsEaten
        })
    }
}

const User = {
    foodsEaten: ({ foodsEaten }) => {
        const userFoodsEaten = db.foods
            .list()
            .filter(food => foodsEaten.includes(food.id))
        return userFoodsEaten
    }
}

module.exports = { Query, User, Mutation }
