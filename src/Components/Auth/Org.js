import React from 'react'
import { Link,Outlet,useNavigate} from "react-router-dom";
import{Button} from 'semantic-ui-react'



const Org = () => {
  const navigate = useNavigate();
  
    return(
      <div>
        <ul>
          <li><Link to="login">login org </Link></li>
          <li><Link to="signup">signup org</Link></li>
        </ul>
        <Button color="teal" onClick={()=>navigate("/people")} >Login As peopel</Button>
        <Outlet/>
      </div>

    )

  }

  export default Org;

