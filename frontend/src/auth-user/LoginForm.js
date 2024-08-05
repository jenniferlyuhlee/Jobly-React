import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../shared/Alert";

function LoginForm( {login} ){
    const navigate = useNavigate();
    const initialState = {
        username:"",
        password:""
    }

    // states: formData, formErrors
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([])

    // general callback to update targeted form data
    function handleChange (e) {
		const { name, value } = e.target;
		setFormData(data => ({...data, [name]: value}))
    }
    
    // form submission handler
    async function handleSubmit(e){
        e.preventDefault();
        let result = await login(formData);
        if(result.success){
            navigate("/")
        }
        else{
            setFormErrors(result.err)
        }
    }

    return(
        <div className="SignupForm card p-4 my-5 col-lg-10 mx-auto">
            <h1 className="text-center mb-2">Login</h1>
            <small className="text-center mb-4">
                Let's find your next role now.
            </small>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-9 ">
                        <input
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-9">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {formErrors.length>0?
                    <Alert type="danger" messages={formErrors} />
                    :
                    null
                }
                <div className="text-center">
                    <button className="btn btn-success">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;