import React, { useState } from "react"

const FunctionalComponent = (props) => {
    const [firstName, setfirstName] = useState(props.userForm.firstName);
    const [lastName, setlastName] = useState(props.userForm.lastName);
    const [email, setEmail] = useState(props.userForm.email);
    const [password, setPassword] = useState(props.userForm.password);
    const [confPassword, setconfPassword] = useState(props.userForm.confPassword);
    // const [errorMsg, seterrorMSG] = useState("");

    // const validation = (e) => {
    //     setfirstName(e.target.value);
    //         if (e.target.value.length < 2) {
    //             seterrorMSG("First Name must be 2 characters or longer!")
    //     }
    // }
    return (
        <div>
            <form className='form'>
                <div className="formInput">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" value={firstName} id="firstName" onChange={ (e) => setfirstName(e.target.value) }/>
                    {
                        firstName.length < 2 ? <p> First Name must be greater than 2 characters!! </p> : <p></p>
                    }
                </div>
                <div className="formInput">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" value={lastName}id="lastName" onChange={ (e) => setlastName(e.target.value) }/>
                    {
                        lastName.length < 2 ? <p> Last Name must be greater than 2 characters!! </p> : <p></p>
                    }
                </div>
                <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"value={email} id="email" onChange={ (e) => setEmail(e.target.value) }/>
                    {
                        email.length < 2 ? <p> Email must be greater than 2 characters!! </p> : <p></p>
                    }
                </div>
                <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password}id="password" onChange={ (e) => setPassword(e.target.value) }/>
                    {
                        password.length < 8 ? <p> Password must be greater than 8 characters!! </p> : <p></p>
                    }
                </div>
                <div className="formInput">
                    <label htmlFor="confPassword">Confirm Password</label>
                    <input type="password" name="confPassword" value={confPassword} id="confPassword" onChange={ (e) => setconfPassword(e.target.value) }/>
                    {
                        password !== confPassword ? <p> Password Must Match! </p> : <p></p>
                    }
                </div>
            </form>
        <div>
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confPassword}</p>
            </div>
        </div>
    )
}

export default FunctionalComponent