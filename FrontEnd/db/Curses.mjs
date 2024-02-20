import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from './connect/index.mjs'

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
    offline: {
        type: DataTypes.BOOLEAN,
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
    price: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    image_path: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
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
export {Curses, Faqs, Maps, sequelize}