import React, { useState } from "react"

const FunctionalComponent = (props) => {
    const [firstName, setfirstName] = useState(props.userForm.firstName);
    const [lastName, setlastName] = useState(props.userForm.lastName);
    const [email, setEmail] = useState(props.userForm.email);
    const [password, setPassword] = useState(props.userForm.password);
    const [confPassword, setconfPassword] = useState(props.userForm.confPassword);
    return (
        <div>
            <form className='form'>
                <div className="formInput">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" value={firstName} id="firstName" onChange={ (e) => setfirstName(e.target.value) }/>
                </div>
                <div className="formInput">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" value={lastName} id="lastName" onChange={ (e) => setlastName(e.target.value) }/>
                </div>
                <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} id="email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} id="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div className="formInput">
                    <label htmlFor="confPassword">Confirm Password</label>
                    <input type="password" name="confPassword" value={confPassword} id="confPassword" onChange={ (e) => setconfPassword(e.target.value) }/>
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