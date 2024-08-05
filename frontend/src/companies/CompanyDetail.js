import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import JobCard from "../jobs/JobCard";

function CompanyDetails() {
    const { handle } = useParams();
    // set to null to use loading spinner
    const [company, setCompany] = useState({});

    useEffect(function getCompanyDetails() {
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (!company){
        return(
            <h1>loading...</h1>
        )
    }
    
    console.log(company.jobs)
    return (
        <div className="CompanyDetail mt-4 text-white">
            <div className="row">
                <img className="col-2"src={company.logoUrl}/>
                <div className="col-10">
                    <h3>{company.name}</h3>
                    <p>{company.description}</p>
                    <p>Size: {company.numEmployees} employees</p>
                </div>
            </div>
            <h5 className="mx-4 my-3">Available Jobs:</h5>
            {company.jobs ? (
                company.jobs.map(j => <JobCard key={j.id} job={j} />)
            ) : (
                <p>No jobs available.</p>
            )}
        </div>
    )
}

export default CompanyDetails;