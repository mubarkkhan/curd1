import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Adding(){
    const [name, setname] = useState('')
    const [status, setstatus] = useState('')
    const [api,setapi] = useState('http://localhost:8000/tdata')
    const postdata = async (e) => {
        e.preventDefault()
        if(!name || !status){
            alert('plz fill the input')
        }
        else{
            const res = await fetch( api, {
                method: 'POST',
                body: JSON.stringify({ "name": name, "status": status }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const update = await res.json()
            if(update.status === true){
                toast.success(update.message)
            }
            else{
                toast.error(update.message)
            }
        }
    }
    return(
        <>
        <ToastContainer/>
        <div className="add">
            <form onSubmit={postdata}>
            <input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}} name="name" placeholder="enter your task name"/>
            <br />
            <input required type="text" value={status} onChange={(e)=>{setstatus(e.target.value)}} name="status" placeholder="enter your task status"/>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}
export{Adding}