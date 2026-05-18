import User from "../model/userModel.js";

export async function Register(req, res) {
    // console.log(req,body.name);
    const{Name, email,password} = req.body
    
    try{
        const check = await User.findOne({email})
        console.log(check);
        if(check){
            return res.status(400).send('Already Exists')
        }
        const option = new User({
            Name:Name,
            email,
            password,
            userType: email ==='admin@gmail.com' ? 'admin':'user'
        })
        await option.save()
    return res.status(201).send(option)

   } catch (error) {
    
    console.log(error);
    return res.status(500).send("SERVER ERROR")
    }
}

export async function Login(req, res) {
    // console.log(req,body.name);
    const{ email,password} = req.body
    
    try{
        const check = await User.findOne({email})
        console.log(check);
        if(!check){
            return res.status(400).send('Not found')
        }
      
    return res.status(200).send(check)

   } catch (error) {
    
    console.log(error);
    return res.status(500).send("SERVER ERROR")
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching users");
    }
}

export async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching user");
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { Name, phone, address, licenseNumber } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                Name,
                phone,
                address,
                licenseNumber
            },
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        
        return res.status(200).send(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error updating user");
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).send("User not found");
        }
        return res.status(200).send({ message: "User deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting user");
    }
}