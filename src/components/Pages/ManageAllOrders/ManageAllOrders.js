import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/bookings")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    const handleDeleteBtn = (index) =>{
        
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile & Email</th>
                    <th>Address</th>
                    <th>Reservation Details</th>
                    <th>Special Request</th>
                    <th>Check-in & Check-out Date</th>
                    </tr>
                </thead>
                {
                    details.map((detail, index) => 
                        <tbody className="tbody-color text-white">
                            <tr>
                            <td className="text-white">{index}</td>
                            <td className="text-white">{detail?.name}</td>
                            <td className="text-white">{detail?.mobile}
                            <br />
                            {detail?.email}
                            </td>
                            <td className="text-white">{detail?.address}</td>
                            <td className="text-white">Room-type: {detail?.roomType}
                            <br />
                            Number of room: {detail?.totalRoom}
                            <br />
                            Number of person: {detail?.totalPerson}
                            </td>
                            <td className="text-white">{detail?.specialRequest}</td>
                            <td className="text-white">Check-in-data: {detail?.checkInDate}
                            <br />
                            Check-out-data{detail?.checkOutDate
}
                            </td>
                            <td className="text-white">
                                <button className="btn text-white">DELETE</button>
                            </td>
                            
                            </tr>
                        </tbody>
                        )
                }
                
            </Table>
        </div>
    );
};

export default ManageAllOrders;