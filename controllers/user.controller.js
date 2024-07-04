const {v4: uuidv4} = require("uuid")
const User = require("../models/user.model");

const getAllUsers = async (req, res)=>{
   const users = await User.find();
   res.status(200).json(users)
};

const getOneUser =  async (req, res)=>{
   try {
    const user = await User.findOne({id: req.params.id})
    res.status(200).json(user)
   } catch (error) {
    res.status(500).send(error.message)
   }
};

const createUser =  async (req, res)=>{
   try {
    const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age)
    }); await newUser.save()
    res.status(201).json(newUser)
   } catch (error) {
            res.status(500).send(error.message)
    
   }
    
};

const updateUser = async (req, res)=>{
    try {
        const user = await User.findOne({id: req.params.id})
        user.name = req.body.name
        user.age = Number(req.body.age)
         await user.save()
        res.status(200).json(user)
       } catch (error) {
                res.status(500).send(error.message)
        
       }
        
};

const deleteUser = async (req, res)=>{
    try {
        await User.deleteOne({id: req.params.id});
        res.status(200).json({message:`User is deleted successfully besed id is: ${id = req.params.id}`})
    } catch (error) {
        res.status(500).json(error.message)
    }
    
}

module.exports = {getAllUsers, createUser, getOneUser, deleteUser, updateUser};