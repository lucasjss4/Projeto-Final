import React from "react";

const PageLogout = () => {  

    localStorage.clear();

    window.location.href = '/';

}

export default PageLogout;