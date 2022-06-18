module.exports = (sequelize, dataTypes) =>{
    let alias = "Genre";
    let cols = {
        image: {
            type: dataTypes.STRING,
        },
        genreName:{
            type: dataTypes.STRING,
        },
        associatedTitle: {
            type: dataTypes.STRING
        },
    };
    let config = {
        timestamps: false
    }

const Genre = sequelize.define (alias, cols, config)
return Genre
}