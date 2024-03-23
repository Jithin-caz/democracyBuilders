import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col,Carousel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setConstituency } from '../redux/actions/constiAction';
import Landing from './landing';
import GraphBar from './graph';

export default function Hero()
{
   const [toggle,setToggle]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [voterid,setVoterId]=useState('');
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [consti,setConsti]=useState('');
  const [area,setArea]=useState('');
  useEffect(()=>{setToggle(true)},[])
  const disForm=()=>{
    document.getElementById('form-conatiner').style.height='30rem'
  }
const validateUser=async(e)=>{
  e.preventDefault();
  
  const data={
    "Voterid":voterid,  
  "name":name
  }
  const res=await axios.post("http://localhost:3300/voters/validate", data,{withCredentials:true}).catch((e)=> alert("voter id does not exist"))
  console.log(res)
  if(res.status==201)
    {
      setAge(res.data.age)
      setConsti(res.data.constituency)
      setArea(res.data.area)
      dispatch(setConstituency(res.data.constituency))
     
      const res2=await axios.put("http://localhost:3300/voters/vote", data,{withCredentials:true}).then((res)=>{
      if(res.data.hasVoted)
      alert("voter has already voted")
      else  
      setToggle(false)}).catch((e)=> alert("voter has already voted"))
      
    }
 
}

  const fetchAPI=async()=>{
   const data={
      "constituency":"const 1"
    }
    const res=await axios.get("http://localhost:3300/candidate/listAll", data,{withCredentials:true})
    console.log(res)
  }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return toggle? <> <Container style={{ paddingTop:'5rem' }}>
        <Row>
            <Col lg={7}><h1>Welcome to the <span className='heading-hero'>DIGITAL VOTING PLATFORM OF THE ELECTION COMMISSION OF INDIA </span> </h1><p style={{ color:'gray',paddingTop:'2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dui vestibulum, consectetur metus ut, dignissim quam. Vestibulum laoreet
             orci non urna venenatis, nec consectetur felis lacinia. Integer vitae tortor nec velit hendrerit ullamcorper. Duis vel efficitur tortor. 
             Cras fringilla lacus sed libero volutpat, nec vestibulum ex tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada 
             fames ac turpis egestas. Quisque nec

            </p> 
            <div id='form-conatiner' className='form-conatiner' style={{ width:'100%', display:'flex',flexDirection:'column',gap:'2rem',paddingBottom:'6rem' }}>
              <div style={{ width:'100%', display:'flex',justifyContent:'center',gap:'2rem' }}><button className='login-button' onClick={disForm}>vote now</button><button className='login-button2' onClick={()=>{
                navigate("/graph")
              }}>live results</button></div>
              <div>
                <form onSubmit={validateUser} style={{ padding:'2rem',display:'flex',flexDirection:'column',maxHeight:'15rem',overflow:'scroll' }}>
                <h4>fill this form to cast your vote</h4>
                  <input value={voterid} onChange={(e)=>setVoterId(e.target.value)} placeholder='voter id' style={{ padding:'.5rem' }}/><br></br>
                  <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' style={{ padding:'.5rem' }}/><br></br>
                  <button className='login-button' type='submit'>submit</button>
                </form>
              </div>
            </div></Col>
            <Col lg={5} style={{ paddingTop:'3rem',paddingBottom:'7rem' }}>
           
            <Carousel interval={1500} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/z33QRRo68LJwufQch3mi_HAtmBG7BLXCYTUFTYRwAgg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/My8xMi9jb3Zlci0x/MS5qcGc_dz02NDA"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/p2MoIgOy5bjymvONGHuQrqLR92MO2XEMhXZY2BtE1XI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VvLmtlcmFsYS5n/b3YuaW4vY2Vva2Vy/YWxhL2Nlby1jbXMv/dXBsb2Fkcy9waWN0/dXJlZ2FsbGVyeS9j/b3ZlcmltYWdlLzMt/MjAyMzExMjQwOTE5/MDcyMTIwOTQuanBn"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/BASjEVnR1884-wB-3euwXvPdnhzsTKQBbltnvzJzFeg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxqYXplZXJhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMy8yMDE5LTA0/LTExVDEwNTY0MFpf/MTY3MDgxMjg4Nl9S/QzE4Q0U1NUExQzBf/UlRSTUFEUF8zX0lO/RElBLUVMRUNUSU9O/LTE3MTA1ODgyMDYu/anBnP3c9NzcwJnJl/c2l6ZT03NzAsNTAw"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>:<Landing constituency={consti} voterid={voterid} name={name}/>
}