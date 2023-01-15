import { NavLink} from "react-router-dom"

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
const BackButton = () =>{
    return(
        <NavLink style={{textDecoration:'none'}} className='navlink-back' to='/'><FaChevronLeft color="rgb(52,134,246)" size={'18px'}/>Homepage</NavLink>
        )
    }
    
    //<button style={{margin:'4px'}}><FaChevronLeft color="rgb(52,134,246)" size={'24px'}/> Back</button>
export default BackButton