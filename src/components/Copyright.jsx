import React from "react";

function Copyright() {

    const date = new Date();
    const year = date.getFullYear();
    return (<div className="copyright">
        <p className="copyright-para">© {year} Incubyte</p>
    </div>);
}

export default Copyright;