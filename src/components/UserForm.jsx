import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <div>
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label> 
                        <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    </div>
                    <div>
                        <label>Email: </label> 
                        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                    <div>
                        <label>Confirm PW:</label>
                        <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm PW: {confPassword}</p>
        </div>
    );
};
    
export default UserForm;
