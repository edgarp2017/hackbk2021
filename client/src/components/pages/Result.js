import { useHistory } from "react-router-dom";

import NavBar from '../Navbar.js';

const Result = () => {
    const data = localStorage.getItem('hackbk-result');
    const history = useHistory();
    if (!data) {
        history.push("/Map");
    }
    console.log(data)
    
    return (
      <div>
        <NavBar />
      </div>
    );
  }
  
  export default Result;
  