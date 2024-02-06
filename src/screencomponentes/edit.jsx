import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Edit(){
    const [id] = useSearchParams()
    const myid = id.get('id')
    const [name, setname] = useState('')
    const [status, setstatus] = useState('')
    const [user,setuser] = useState('')
    const getedit = async()=>{
        const res = await fetch(`http://localhost:8000/editget${myid}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const update = await res.json()
        setuser(update)
    }
    useEffect(()=>{
        getedit()
    }, [])

    const updatedata = async(e)=>{
        const res = await fetch(`http://localhost:8000/edit/${e}`,{
            method : 'PATCH',
            body : JSON.stringify({
                'name' : (name.length>0 ? name : user.edit.name),
                'status' : (status.length>0 ? status : user.edit.status)
            }),
            headers : {
                'Content-Type' : 'application/json'
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
    return(
        <>
        <ToastContainer/>
        <div className="edit">
            <form>
                <input type="text" value={name} name="name" onChange={(e)=>{setname(e.target.value)}} placeholder={user && user.edit.name}/>
                <input type="text" value={status} name="status" onChange={(e)=>{setstatus(e.target.value)}} placeholder={user && user.edit.status}/>
                <button onClick={()=>{updatedata(user && user.edit._id)}}>Update</button>
            </form>
        </div>
        </>
    )
}
export{Edit}