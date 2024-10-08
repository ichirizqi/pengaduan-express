import Pengaduan from "../models/PengaduanModel.js";

//getAll
export const getPengaduan = async(req, res) => {
    try{
        const response = await Pengaduan.findAll();
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message);
    }
}

//getID
export const getPengaduanById = async(req, res) => {
    try{
        const response = await Pengaduan.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message);
    }
}

export const createPengaduan = async(req, res) => {
    try{
        await Pengaduan.create(req.body);
        res.status(201).json({msg: "Pengaduan Created"});
    }
    catch(error){
        console.log(error.message);
    }
}

export const updatePengaduan = async(req, res) => {
    try{
        await Pengaduan.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pengaduan Updated"});
    }
    catch(error){
        console.log(error.message);
    }
}

export const deletePengaduan = async(req, res) => {
    try{
        await Pengaduan.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pengaduan Deleted"});
    }
    catch(error){
        console.log(error.message);
    }
}