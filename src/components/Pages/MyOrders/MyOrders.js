import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
    const email ="shimu@mail.com"
    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[email])
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;