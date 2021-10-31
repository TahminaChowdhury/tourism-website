import React from 'react';
import { useForm } from 'react-hook-form';

const Reservation = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      data.status = "Pending"
        fetch("https://rocky-inlet-36889.herokuapp.com/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
    };

    return (
        <div className="bg">
          <div className=" container text-center mb-5 pb-5">
          <h1 className="text-center mb-5 pt-5 text-primary">Make Your Reservation</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} className="p-2 m-2 w-25" placeholder="Name"/>
                <br />
  
                <input type="mobile" {...register("mobile")} className="p-2 m-2 w-25" placeholder="Mobile"/>
                <br />
      
                <input {...register("email")} className="p-2 m-2 w-25"placeholder="Email"/>
                <br />
    
                <input {...register("address")} className="p-2 m-2 w-25"placeholder="Address"/>
                <br />
           
                <select {...register("roomType")} className="p-2 m-2 w-25">
                <option value="room/suiteType">Room/Suite Type</option>
                <option value="Regular Room">Regular Room</option>
                <option value="Duluxe Room">Deluxe Room</option>
                <option value="Suit">Suite</option>
                <option value="Madhurima Suite">Madhurima Suite</option>
                </select>
                <br />
          
                <input type="number" {...register("totalRoom", { min: 1, max: 10 })}className="p-2 m-2 w-25"placeholder="Number Of Room"/>
                <br />
       
                <input type="number" {...register("totalPerson", { min: 1, max: 10 })} className="p-2 m-2 w-25"placeholder="Number Of Persons"/>
                <br />
       
                <input {...register("specialRequest")} className="p-2 m-2 w-25"placeholder="Special Request"/>
                <br />
               
                <input
                {...register("checkInDate")}
                type="date"
                className="p-2 m-2 w-25" value="Check In Date"
              />
                <br />
  
                <input
                {...register("checkOutDate")}
                type="date"
                className="p-2 m-2 w-25" value="Check Out Date"
              />
              <br />
              <input type="submit" value="Book Now" className="btn btn-primary mt-3"/>
            </form>
            </div>
        </div>
    );
};

export default Reservation;