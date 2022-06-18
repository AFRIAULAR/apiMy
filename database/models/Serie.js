module.exports = (sequelize, dataTypes) =>{
    let alias = "Serie";
    let cols = {
        image: {
            type: dataTypes.STRING,
        },
        title:{
            type: dataTypes.STRING,
            primaryKey: true,
        },
        createdAt: {
            type: dataTypes.DATE
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        associatedCharacter: {
            type: dataTypes.STRING
        },
    };
    let config = {
        timestamps: true
    }

const Serie = sequelize.define (alias, cols, config)
return Serie
}