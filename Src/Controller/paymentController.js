import pay from "../model/paymentModel.js";

export async function Carpay(req, res) {
    
    const{carID, userID, payment, carddetails, cardexpiry}= req.body
    try {
       const option = new pay ({
     carID: carID,
     userID,
     payment,
     carddetails,
     cardexpiry,
    })
    await option.save()
    return res.status(201).send(option)
}
    catch (error) {
          console.log(error);
    return res.status(500).send("SERVER ERROR")
    }
}

export async function getPayments(req, res) {
    try {
        const payments = await pay.find();
        return res.status(200).send(payments);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching payments");
    }
}

export async function getUserPayments(req, res) {
    try {
        const { userId } = req.params;
        const userPayments = await pay.find({userID: userId});
        return res.status(200).send(userPayments);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching user payments");
    }
}

export async function updatePayment(req, res) {
    try {
        const { id } = req.params;
        const { payment, carddetails, cardexpiry } = req.body;
        
        const updatedPayment = await pay.findByIdAndUpdate(
            id,
            { payment, carddetails, cardexpiry },
            { new: true }
        );
        
        if (!updatedPayment) {
            return res.status(404).send("Payment not found");
        }
        
        return res.status(200).send(updatedPayment);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error updating payment");
    }
}

export async function deletePayment(req, res) {
    try {
        const { id } = req.params;
        const deletedPayment = await pay.findByIdAndDelete(id);
        
        if (!deletedPayment) {
            return res.status(404).send("Payment not found");
        }
        
        return res.status(200).send("Payment deleted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting payment");
    }
}

