const {
    Schema
} = require("mongoose");
const {
    mongoose
} = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema({
        title: String,
        desscription: String,
        published: String
    }, {
        timestamps: true
    });
    schema.method("toJson", function () {
        const {
            __v,
            _id,
            ...Object
        } = this.toObject();
        Object.id = _id;
        return Object;
    });
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
}