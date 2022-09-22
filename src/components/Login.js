import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import SigninImage from './SigninImage'


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: "",
        password: ""

    })
    const [customers, setCustomers] = useState([])
    const api = axios.create({
        baseURL:`http://localhost:3000/customers`
    })

    useEffect(() => {
    
        api.get(`/`)
      .then(res=>setCustomers(res.data))
      .catch(err=>console.log(err))
    
    })
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    function submit(e){
        e.preventDefault();

            if (data.id === ""){
                alert("Please enter emailid")
            }
            else if(!data.id.includes("@")) {
                alert('please enter valid email addres');
            } else if (data.password === "") {
                alert('password field is requred');
            } else if (data.password.length < 5) {
                alert('password length greater five');
            }
            
            var LoginValidationStatus = ""
            for (let i = 0; i < customers.length; i++) {
            if (data.id === customers[i].id && data.password === customers[i].password)
            {
                LoginValidationStatus = "ok"

            }
        }
        
        if( LoginValidationStatus === "ok" )
        {
                        alert("login success")
                        navigate( "/dashboard" )
                    }
                else    
                    {
                        alert("login failed")
                        
                    }
    }
  return (
    <>
<div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{width:"100%"}}>
                        <h3 className='text-center col-lg-4'>Sign In</h3>
                        <Form onSubmit ={(e)=> submit(e)}>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e)=>handle(e)}  id= "id" value ={data.id}  
                                type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control onChange={(e)=>handle(e)}  id= "password" value ={data.password}  
                                 type="password"  placeholder="Password"/>
                            </Form.Group>                       
                           
                            <Button variant='primary' className='col-lg-6' type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Not a registered user? <span><Link to="/">Register here!</Link></span> </p>
                    </div>
                    <SigninImage/>
                </section>
            </div>
    </>
  )
}

export default Login