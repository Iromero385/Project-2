import React from 'react'

const Signup = () => {

    document.body.style.backgroundImage = "url('https://media.giphy.com/media/3oEduX1XE3HFHJE7sI/giphy.gif')"
    document.body.style.backgroundSize = "cover"

    return (<div style={{ textAlign: "center", marginTop: "170px" }}>

        <h1 style={{ color: "green" }}>Welcome Explorer!</h1>
        <form>
            <label>
                <b style={{ color: "green" }}><h4>Full Name:</h4></b>
                <input type="text" name="name" />
            </label>
        </form>
        <form>
            <label>
                <b style={{ color: "green" }}><h4>Email:</h4></b>
                <input type="text" name="name" />
            </label>
        </form>
        <form>
            <label>
                <b style={{ color: "green" }}><h4>Password:</h4></b>
                <input style={{ color: "black" }} type="text" name="name" />
            </label>
        </form>
        <form>
            <input style={{ color: "green", backgroundColor: "empty" }} type="submit" value="Submit" />
        </form>
        <form>
            <button style={{color:"green", marginTop: "7px"}}>Sign Up!</button>
        </form>
    </div>)
}


export default Signup;
