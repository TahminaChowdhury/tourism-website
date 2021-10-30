import React from 'react';
import { useForm } from 'react-hook-form';

const Reservation = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
    };

    return (
        <div className="container text-center m-5 p-5">
             <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name:</label>
                <input {...register("name", { required: true })} className="p-2 m-2 w-25"/>
                <br />
                <label>Mobile:</label>
                <input type="mobile" {...register("mobile")} className="p-2 m-2 w-25"/>
                <br />
                <label>Email:</label>
                <input {...register("email")} className="p-2 m-2 w-25"/>
                <br />
                <label>Address:</label>
                <input {...register("address")} className="p-2 m-2 w-25"/>
                <br />
                <label>Room/Suite Type:</label>
                <select {...register("roomType")} className="p-2 m-2 w-25">
                <option value="room/suiteType">Room/Suite Type</option>
                <option value="Regular Room">Regular Room</option>
                <option value="Duluxe Room">Deluxe Room</option>
                <option value="Suit">Suite</option>
                <option value="Madhurima Suite">Madhurima Suite</option>
                </select>
                <br />
                <label>Number of room/suit:</label>
                <input type="number" {...register("totalRoom", { min: 1, max: 10 })}className="p-2 m-2 w-25"/>
                <br />
                <label>Number of Persons:</label>
                <input type="number" {...register("totalPerson", { min: 1, max: 10 })} className="p-2 m-2 w-25"/>
                <br />
                <label>Any special request?:</label>
                <input {...register("specialRequest")} className="p-2 m-2 w-25"/>
                <br />
                <label>Check-in Date:</label>
                <input
                {...register("checkInDate")}
                type="date"
                className="p-2 m-2 w-25"
              />
                <br />
                <label>Check-Out Date:</label>
                <input
                {...register("checkOutDate")}
                type="date"
                className="p-2 m-2 w-25"
              />
              <br />
              <input type="submit" value="Book Now" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Reservation;