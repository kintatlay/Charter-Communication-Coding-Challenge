import React from 'react'
import "../css/Loader.css";

const Loader = () => {
    return (
        <div data-testid="loader-styling" className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader;