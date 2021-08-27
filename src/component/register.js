import React, { useState } from 'react';

const Register = () => {

    const [regno, setregno] = useState("");
    const changeHandler = (e) => {
        setregno(e.target.value);
    };

    return (
        <div style={{margin:"30px"}}>

            <input value={regno} onChange={changeHandler} placeholder="Enter your registeration number then enter the home page" style={{ padding: "10px 20px" }} />
            <button style={{padding:"10px 30px" ,marginLeft:"20px"}} onClick={() => {
                if (regno == "selve12345") {
                    localStorage.setItem("login","x");
                    window.location.href="/"
                }
            }}>
                next
            </button>
        </div>
    )
}
export default Register;