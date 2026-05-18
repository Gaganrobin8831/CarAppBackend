import Car from "../model/carModel.js";

export async function Carspecs(req, res) {
    const {CarName,Category,Year,Brand,Engine,Transmission,Fueltype,Price,Image,Description,Model,Drive,isAvailable,Seller}= req.body
    
    try{
         const check = await Car.findOne({CarName})
        console.log(check);
        if(check){
            return res.status(400).send('Car Available')
        } 
        const option = new Car({
            CarName,
            Category,
            Year: Year ? parseFloat(Year) : undefined,
            Brand,
            Engine,
            Transmission: Transmission || "manual",
            Fueltype,
            Price: parseFloat(Price),
            Image: Image || 'https://via.placeholder.com/300x200?text=Car',
            Description: Description || '',
            Model,
            Drive,
            isAvailable: isAvailable !== undefined ? isAvailable : true,
            Seller
        })
        await option.save()
    return res.status(201).send(option)
    }
    catch (error){
    console.log(error);
    return res.status(500).send("Car Unavailable")
    }
}

export async function getAllCars(req, res) {
    try {
        const cars = await Car.find();
        return res.status(200).send(cars);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching cars");
    }
}

export async function getCarById(req, res) {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).send("Car not found");
        }
        return res.status(200).send(car);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching car");
    }
}

export async function updateCar(req, res) {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };
        
        if (updateData.Year !== undefined) updateData.Year = parseFloat(updateData.Year);
        if (updateData.Price !== undefined) updateData.Price = parseFloat(updateData.Price);
        
        const updatedCar = await Car.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true }
        );
        
        if (!updatedCar) {
            return res.status(404).send("Car not found");
        }
        
        return res.status(200).send(updatedCar);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error updating car");
    }
}

export async function deleteCar(req, res) {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);
        
        if (!deletedCar) {
            return res.status(404).send("Car not found");
        }
        
        return res.status(200).send("Car deleted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting car");
    }
}