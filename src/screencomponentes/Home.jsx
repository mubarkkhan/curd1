import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Home() {
    const add = useNavigate()
    const [data, setdata] = useState([])
    const getdata = async () => {
        const res = await fetch('http://localhost:8000/gettdata')
        const update = await res.json()
        setdata(update)
    }
    useEffect(() => {
        getdata()
    }, [])

    const deldata = async (e) => {
        const res = await fetch(`http://localhost:8000/delete/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const update = await res.json()
        if (update.status === true) {
            toast.success(update.message)
            setTimeout(() => {
                window.location.reload()
            }, 500);
        }
        else {
            toast.error(update.message)
        }
    }
<<<<<<< HEAD
    
=======

>>>>>>> 6923bb24962ed351cdacf805b7c40ef928def5b8
    const Click = () => {
        add('/add')
    }
    return (
        <>
            <ToastContainer />
            <div className="todo">
                <h1>TODO LIST</h1>
                <button onClick={Click}>Add Task</button>
                <div className="nav">
                    <h5>#</h5>
<<<<<<< HEAD
                    <h5 className="ta">Task Name</h5>
                    <h5 className="st">Status</h5>
                    <h5 className="ed">Edit</h5>
=======
                    <h5>Task Name</h5>
                    <h5 className="status">Status</h5>
                    <h5>Edit</h5>
>>>>>>> 6923bb24962ed351cdacf805b7c40ef928def5b8
                    <h5>Remove</h5>
                </div>
                <div className="line"></div>
                <div className="data">
                    {
                        data.map((datas, index) => {
                            return (
                                <>
                                    <div key={datas._id} className="task">
<<<<<<< HEAD
                                        <h4>{index + 1}</h4>
                                        <div className="name">
                                        <h2>{datas.name}</h2>
                                        </div>
                                        <div className="status">
                                        <h3>{datas.status}</h3>
                                        </div>
                                        <Link to={`/edit?id=/${datas._id}`}><button className="edit"><MdEdit /></button></Link>
                                        <button onClick={()=>{deldata(datas._id)}} className="delete"><MdDelete /></button>
=======
                                        <div className="detail">
                                            <h4>{index + 1}</h4>
                                            <h2>{datas.name}</h2>
                                            <h3 style={{fontSize:"1.2rem",width:"13%"}}>{datas.status}</h3>
                                        </div>
                                            <Link to={`/edit?id=/${datas._id}`}><button className="edit"><MdEdit /></button></Link>
                                            <button onClick={() => { deldata(datas._id) }} className="delete"><MdDelete /></button>

>>>>>>> 6923bb24962ed351cdacf805b7c40ef928def5b8
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export { Home }