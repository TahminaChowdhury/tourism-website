import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const ManageAllBookings = () => {
    const [details, setDetails] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
        fetch("https://rocky-inlet-36889.herokuapp.com/bookings")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[isDelete])

    // handle delete
    const handleDeleteBtn = (id) =>{
        fetch(`https://rocky-inlet-36889.herokuapp.com/bookings/${id}`,{
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert("Are you sure want to delete ?")
                setIsDelete(true);
              } else {
                setIsDelete(false);
              }
        });
    };

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
                            Check-out-data{detail?.checkOutDate}
                            </td>
                            <td className="text-white">{detail?.status}</td>
                            <td className="text-white">
                                <Link to={`updatestatus/${detail._id}`}><button className="btn regular-btn fw-bold m-2">Update</button></Link>
                            </td>
                            <td className="text-white">
                                <button onClick={()=>handleDeleteBtn(detail._id)} className="btn regular-btn fw-bold m-2">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        )
                }
            </Table>
        </div>
    );
};

export default ManageAllBookings;