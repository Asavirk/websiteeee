import { createContext } from "react";
import{useAuth} from'@clerk/clerk-react'
import axios from "axios";
import { toast } from "react-toastify";

const AppContext=createContext()

const AppContetxProvider=(props)=>{

  const [credit ,setCredit]=useState(false)


  const backendURL=import.meta.env.VITE_BACKEND_URL
  const {getToken}=useAuth()


  const loadcreditData=async()=>{
      try{
        const token=await getToken()
        const {data} =await axios.get(backendURL+"/api/user/credit", {headers:{token}})
        if(data.success){
          setCredit(data.credit)
          console.log();
          
        }
      }catch(error){
        console.log( error);
        toast.error("Error fetching credit data")
      }
      

      const value={
        credit,
        loadcreditData,
        backendURL,
      }



  }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContetxProvider