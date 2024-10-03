import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pengaduan = db.define('pengaduan', {
    nama: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    deskripsi: DataTypes.STRING
}, {
    freezeTableName:true
});

export default Pengaduan;

(async() => {
    await db.sync();
})();
