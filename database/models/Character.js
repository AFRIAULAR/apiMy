module.exports = (sequelize, dataTypes) =>{
    let alias = "Character";
    let cols = {
        image: {
            type: dataTypes.STRING,
        },
        charName:{
            type: dataTypes.STRING,
            primaryKey: true,
        },
        age: {
            type: dataTypes.INTEGER
        },
        weight: {
            type: dataTypes.INTEGER
        },
        story: {
            type: dataTypes.STRING
        },
        associated: {
            type: dataTypes.STRING
        },
    };
    let config = {
        timestamps: false
    }

const Character = sequelize.define (alias, cols, config)
return Character
}