// import {Sequelize, DataTypes} from 'sequelize'
// import {sequelize} from './connect/index.mjs'
const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('./connect/index.js')
// require('dotenv').config()
//
// const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
//     logging: false,
// });

const Curses = sequelize.define('Curses', {
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    min_count_human: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max_count_human: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    curse_type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    teacher_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    profess: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    week_days: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "main_curses"
});

const Faqs = sequelize.define('Faqs', {
    question: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    reply: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "main_faqs"
});

// Define Maps model
const Maps = sequelize.define('Maps', {
    position: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "main_maps"
});

Curses.hasMany(Faqs, {foreignKey: 'curse_id', onDelete: 'CASCADE'});
Faqs.belongsTo(Curses, {
    foreignKey: 'curse_id' // Assuming 'curseId' is the foreign key column in Faqs referencing Curses
});

Curses.hasMany(Maps, {foreignKey: 'curse_id', onDelete: 'CASCADE' });
Maps.belongsTo(Curses, {
    foreignKey: 'curse_id' // Assuming 'curseId' is the foreign key column in Faqs referencing Curses
});


// module.exports = { Curses, Faqs, Maps, sequelize }
module.exports = {Curses, Faqs, Maps, sequelize}