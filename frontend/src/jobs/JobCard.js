import React from "react";
import "./JobCard.css"

function JobCard({job}){
    const companyName = job.companyName? 
        <a href={`companies/${job.companyHandle}`}>
            <i>{job.companyName}</i>
        </a> 
        : null;

    let nf = new Intl.NumberFormat();
    const salary = job.salary? nf.format(+job.salary) : "N/A"
    const equity = job.equity? job.equity : "N/A"

    return(
        <div className="JobCard card p-4 m-4">
            <h6 className="card-title">{job.title}</h6>
                {companyName}
                <div className="card-body">
                    <p>Salary(USD): {salary}
                    <br/>
                    Equity: {equity}</p>
                </div>
        </div>
    )
}

export default JobCard;