import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from './connect/index.mjs'

const Teachers = sequelize.define('Teachers', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    _as: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image_path: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    linkedin_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    facebook_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    youtube_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    behance_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    github_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    dribbble_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    timestamps: false,
    tableName: "main_teachers"
});

const Pluses = sequelize.define('Pluses', {
    image_path: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    header: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "main_pluses"
});

const Feedbacks = sequelize.define('Feedbacks', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "main_feedbacks"
});

const Events = sequelize.define('Events', {
    header: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    file_path: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    post_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    is_open: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "main_events"
});

const MainFaqs = sequelize.define('MainFaqs', {
    question: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "main_mainfaqs"
});

export { Teachers, Pluses, Feedbacks, Events, MainFaqs };
