const  Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://Sam:alias42@16.171.151.148:5432/Api', {
    logging: false,
});

export {
    sequelize
}