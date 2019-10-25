import React from 'react'

const Login = () => {

   document.body.style.backgroundImage = "url('https://media0.giphy.com/media/bSHYJAbDSVUUo/source.gif')"
   document.body.style.backgroundSize = "cover"
    return (<div style={{ textAlign: "center", marginTop: "170px", backgroundColor: "black", marginRight: "300px", marginLeft: "300px", backgroundImage: "url('https://media1.giphy.com/media/peFJZc82UZ4iY/source.gif')" }}>

        <h1 style={{ color: "green", textAlign: "center"}}>Welcome Back Explorer!</h1>
        <form>
            <label>
                <b><h4 style={{ color: "green", textAlign: "center" }}>Username:</h4></b>
                <input type="text" name="name" />
            </label>
        </form>
        <form>
            <label>
                <b><h4 style={{ color: "green", textAlign: "center" }}>Password:</h4></b>
                <input type="text" name="name" />
            </label>
        </form>
        <form>
            <input style={{ color: "green" }} type="submit" value="Explore!" />
        </form>
    </div>)
}


export default Login;
