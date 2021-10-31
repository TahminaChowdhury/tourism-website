import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateStatus = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="text-center m-5">
            <h1>Update Your Reservation status</h1>

            {/* update form */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("status")} placeholder="Update Status"/>
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default UpdateStatus;