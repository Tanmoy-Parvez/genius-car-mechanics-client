import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://genius-car-mechanics-server-21.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service successfully added!")
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h1>This is an add service page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;