

const { DataTypes } = require("sequelize");
const sequelize = require("../common/databaseConnection");

const call = sequelize.define('call', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    CallSid: {
        type: DataTypes.STRING
    },
    CallStatus: {
        type: DataTypes.STRING
    },
    Caller: {
        type: DataTypes.STRING

    },
    CallerCountry: {
        type: DataTypes.STRING
    },
    Direction: {
        type: DataTypes.STRING
    },
    RecordingDuration: {
        type: DataTypes.STRING

    },
    RecordingSid: {
        type: DataTypes.STRING
    },
    RecordingUrl: {
        type: DataTypes.STRING
    },
    Called: {
        type: DataTypes.STRING

    },
    ToCountry: {
        type: DataTypes.STRING
    }
   
}, {
    tableName: 'call',
    timestamps: false,
    // paranoid: true
})

console.log("call Table", call === sequelize.models.call);
module.exports = call;