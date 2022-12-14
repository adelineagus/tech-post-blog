const {Model, DataTypes}= require('sequelize');
const sequelize= require('../config/connection');

//define post attributes

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        postText:{
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key:'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports= Post;