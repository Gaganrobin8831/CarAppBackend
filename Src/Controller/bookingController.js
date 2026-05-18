import booking from "../model/bookingModel.js";

export async function Carbook(req, res) {
   
    const{carID, userID, downpayment, status, paymentStatus, startDate, endDate}= req.body
 
    try {
        const check = await  booking.findOne({carID, userID})
        console.log(check);
        if (check) {
         return res.status(400).send("Booking Available")
        }
        const option = new booking({
            carID:carID,
            userID,  
            downpayment,
            status: status || 'pending',
            paymentStatus: paymentStatus || 'unpaid',
            startDate,
            endDate
    })
    await option.save()
    return res.status(201).send(option)
}
     catch (error) {
        console.log (error);
        return res.status(500).send("Already Booked")
        
    }
}

export async function getBookings(req, res) {
    try {
        const bookings = await booking.find().populate('carID').populate('userID');
        return res.status(200).send(bookings);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching bookings");
    }
}

export async function getUserBookings(req, res) {
    try {
        const { userId } = req.params;
        const userBookings = await booking.find({userID: userId}).populate('carID');
        return res.status(200).send(userBookings);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching user bookings");
    }
}

export async function updateBooking(req, res) {
    try {
        const { id } = req.params;
        const { status, paymentStatus } = req.body;
        
        const updatedBooking = await booking.findByIdAndUpdate(
            id,
            { status, paymentStatus },
            { new: true }
        );
        
        if (!updatedBooking) {
            return res.status(404).send("Booking not found");
        }
        
        return res.status(200).send(updatedBooking);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error updating booking");
    }
}

export async function getBookingById(req, res) {
    try {
        const { id } = req.params;
        const foundBooking = await booking.findById(id).populate('carID').populate('userID');
        
        if (!foundBooking) {
            return res.status(404).send("Booking not found");
        }
        
        return res.status(200).send(foundBooking);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error fetching booking details");
    }
}

export async function deleteBooking(req, res) {
    try {
        const { id } = req.params;
        const deletedBooking = await booking.findByIdAndDelete(id);
        
        if (!deletedBooking) {
            return res.status(404).send("Booking not found");
        }
        
        return res.status(200).send("Booking deleted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting booking");
    }
}