import React,{useState} from 'react';
import axios from 'axios';
function Form(props) {
    const [state,setState] = useState({
        email:'',
        name:''
    });

    const handleChange=(e)=>{
        setState({
            ...state,[e.target.id]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(state);
        await axios.post("http://localhost:3001/contact",{
            email:state.email,
            name:state.name
        },{
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err));
    }
    return (
       
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email1"  onChange={(e)=>handleChange(e)}/>
                   
                </div>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>handleChange(e)}/>
                </div>

                <button type="submit" className="btn btn-light" onSubmit={(e)=>handleSubmit(e)}>Submit</button>
            </form>
       
    );
}

export default Form;