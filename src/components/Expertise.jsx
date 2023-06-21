import React from "react";
import expertise from "../arrays/expertise";

function eachExpertise(expert) {
    return(<div className="expert-box">
            <h2 className="expert-title">{expert.title}</h2>
            <p className="expert-description">{expert.description}</p>
        </div>
    );
}

function Expertise() {
    return (<div className="expertise">
        <h1 className="expertise-heading">Our Expertise</h1>
        <div className="grid">
            {expertise.map(eachExpertise)}
        </div>
    </div>);
}

export default Expertise;