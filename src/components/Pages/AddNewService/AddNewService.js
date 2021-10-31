import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://rocky-inlet-36889.herokuapp.com/addService",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
    };
    return (
        <div className="text-center m-5">
            <h1 className="text-primary">Add A Service</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} className="p-2 m-2 w-25"/>
                <br />
                <input placeholder="Description" {...register("description")} className="p-2 m-2 w-25"/>
                <br />
                <input {...register("img", { required: true })} className="p-2 m-2 w-25" placeholder="img-url"/>
                <br />
                <input type="submit" />
                </form>
        </div>
    );
};

export default AddNewService;

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/NY6HSys/medium-shot-woman-sitting-car-23-2148921699.jpg" alt="medium-shot-woman-sitting-car-23-2148921699" border="0"></a>

