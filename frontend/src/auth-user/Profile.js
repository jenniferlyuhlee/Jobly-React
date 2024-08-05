import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Alert from "../shared/Alert";

function Profile(){
    const {currUser} = useContext(UserContext);

    const initialState = {
        username: currUser.username,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email
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

    }


        return(
            <div className="SignupForm card p-4 my-5 col-lg-10 mx-auto">
                <h1 className="text-center mb-3">My Profile</h1>
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
                                readOnly
                                disabled
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label">
                            First Name
                        </label>
                        <div className="col-sm-9">
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label">
                            Last Name
                        </label>
                        <div className="col-sm-9">
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-9">
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={formData.email}
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
                        <button className="btn btn-success">Save Changes</button>
                    </div>
                </form>
            </div>
        )
}

export default Profile;