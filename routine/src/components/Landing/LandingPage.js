import {useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function LandingPage() {

const [taskList,settaskList]=useState([]);

let history = useHistory();

useEffect(()=>{
Axios.get("http://localhost:5000/api/get").then((data)=>{
settaskList(data.data)
});
},[])

return (
    <form className="my-form">
        <div className="magezi">
            <h1>MAGEZI FAMILY</h1>
            <img src="/images/Magezifam.jpeg" />
            <h3 className="rota">Task Rota App</h3>

            <button>
            <Link to= "/Register" className="btn">Register/Login</Link>
            </button>
            </div>
        </form>
    )}
    

export default LandingPage

