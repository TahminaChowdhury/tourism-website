import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const {id} = useParams();
    
    const [user, setuser] = useState({});
    const [isUpdate, setIsUpdated] = useState(null);
    useEffect(() => {
        fetch(`https://rocky-inlet-36889.herokuapp.com/bookings/${id}`)
        .then(res => res.json())
        .then(data => setuser(data))
    },[id,isUpdate])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://rocky-inlet-36889.herokuapp.com/updatestatus/${id}`,{
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.modifiedCount) {
            setIsUpdated(true);
            } else {
            setIsUpdated(false);
            }
      });
    };
    return (
        <div>
            <div className="text-center m-5">
            <h3 className="text-primary pb-3">Update Your Reservation status</h3>
            {/* update form */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("status")} placeholder="Update Your Pending Status..." className="p-2 m-2 w-25"/>
            <br /> <br />
            <input type="submit" value="Update"/>

            </form>
            </div>
        </div>
    );
};

export default UpdateStatus;