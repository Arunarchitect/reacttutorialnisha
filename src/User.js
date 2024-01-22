import { useEffect } from "react"
import { dbConnection } from "./dbConnection";

const User = ({counter}) => {
    const conn = dbConnection();
    useEffect(() => {
        conn.connect();
        
        return () => {
            conn.disconnect();
        }
    }, [])
    
    // console.log('outside useEffect')
    
    return  <div>
        <h1>User Component</h1>
    </div>
}

export default User