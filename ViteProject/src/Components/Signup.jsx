import React, { useState } from "react"

function SignupForm(){

    const [firstName,setFName]=useState("");
    const [lastName,setLName]=useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate[];

    var signup =()=>{

    }

    return(
        <form onSubmit={signup}></form>
    )
}

export default Signup;