import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import SigninImage from './SigninImage'

function Home() {
    const navigate = useNavigate();
    const url = "http://localhost:3000/customers"

    const [data, setData] = useState({
        id: "",
        name: "",
        address: "",
        accNo: "",
        phone: "",
        password: "",
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    function submit(e) {
        e.preventDefault();
        if (data.id === "") {
            alert('Email Id field is required')
        }else if(data.name === ""){
            alert("Name field is required")
        }else if (!data.id.includes("@")) {
            alert('Please enter valid email addres');
        } else if (data.name === "") {
            alert('Name field is requred');
        } else if (data.accNo === "") {
            alert("Account number is required")
        } else if (data.phone === "") {
            alert("Phone number is required")
        } else if (data.phone.length < 10) {
            alert("Please provide a valid 10 digit phone number")
        } else if (data.password === "") {
            alert('password field is requred');
        } else if (data.password.length < 5) {
            alert('password length should be greater than five');
        } else {
            console.log("data added succesfully");
            alert("Data added successfully")
            navigate('/login');
            Axios.post(url, {
                id: data.id,
                name: data.name,
                address: data.address,
                accNo: data.accNo,
                phone: data.phone,
                password: data.password
            })
                .then(res => {
                    console.log(res.data);
                })
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-4'>Sign Up</h3>
                        <Form onSubmit={(e) => submit(e)}>
                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="id" value={data.id}
                                    type="text" placeholder="Enter your Email ID" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="name" value={data.name}
                                    type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="address" value={data.address}
                                    type="text" placeholder="Enter your address" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="accNo" value={data.accNo}
                                    type="number" placeholder="Enter your Account Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="phone" value={data.phone}
                                    type="number" placeholder="Enter your Phone Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e) => handle(e)} id="password" value={data.password}
                                    type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' type="submit">
                               Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already have an account? <span><Link to="/login">SignIn</Link></span> </p>
                    </div>
                    <SigninImage/>
                </section>
            </div>
        </>
    )
}

export default Home