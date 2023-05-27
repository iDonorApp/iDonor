const usersModel = require('../models/usersModel');
const getAllUsers = async (req,res)=>{
    try {
        const [data] = await usersModel.getAllUsers();
        res.json({
            message : 'All User',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error,
        })
    }

}

const createUsers = async(req,res)=>{
    const {body} = req;
    if(!body.nama || !body.golongan || !body.jenis_kelamin || !body.tanggal_lahir || !body.no_whatsapp || !body.alamat || !body.email || !body.password){
        return res.status(400).json({
            message:'Lengkapi Data Anda',
            data:null,
        })
    }
    try {
        await usersModel.createNewUser(body);
        res.status(201).json({
            message : 'succes ur POST',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error,
        })
    }  
}

const updateUser = async(req,res) => {
    const {iduser}= req.params;
    const{body} = req;
    try {
        await usersModel.updateUser(body, iduser);
        res.status(201).json({
            message : 'Succes Update',
            data: {
                id: iduser,
                ...body
             
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error,
        })
    }
   
}

const deleteUser = async (req,res)=>{
    const {iduser} = req.params;
    try {
        await usersModel.deleteUser(iduser);
        res.status(200).json({
            message : 'SUCCES DELETE DATA',
            data: null })
             
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error,
        })
    }
}

module.exports = {getAllUsers, createUsers,updateUser,deleteUser};