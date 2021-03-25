import React,{useState} from 'react';

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

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state);
    }
    return (
        <div>
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
        </div>
    );
}

export default Form;