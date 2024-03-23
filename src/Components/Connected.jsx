import React, { useEffect, useState } from "react";
import axios from "axios";
const Connected = (props) => {

    



   const [candi,setCandi]=useState([])
   const markVoted=async()=>{
    console.log("voter id is "+props.name)
    const data2={
        Voterid:parseInt(props.voterid) ,
        name:props.name
    }
    const res2=await axios.put("http://localhost:3300/voters/showVoter", data2,{withCredentials:true}).catch((e)=>alert("voter not found"))
    console.log(res2)
        alert("vote successful. You will now be redirected to the main page")
        window.location.reload();
   }
   const increment=async(index)=>{
    const data={
        id:index
      }
    const res=await axios.put("http://localhost:3300/candidate/increment", data,{withCredentials:true}).catch((e)=>alert("candidate not found"))
    console.log(res.data)
   markVoted()
   

   }
   async function getCandidates(){
   const data={
    constituency:props.constituency
  }
  const res=await axios.get("http://localhost:3300/candidate/listAll", data,{withCredentials:true}).catch((e)=>alert("no candidate in this constituency"))
  setCandi(res.data)
}
useEffect(()=>{getCandidates()},[])
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            { props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {candi.map((item, index)=><tr key={index}>
                    <th>{index}</th>
                    <th>{item.name}</th>
                    <th>{item.votes}</th>
                    <button onClick={()=>{increment(item.id)

                    }}>vote for {item.name}</button>
                </tr>)}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;