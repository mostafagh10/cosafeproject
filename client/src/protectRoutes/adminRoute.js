import React , {useContext} from "react";
import {UserContext} from '../ContextAPI/User'
import {Route,Redirect} from 'react-router-dom'

const AdminRoute = ({component : Component, ...rest}) => {
    const { isUser , userType, user } = useContext(UserContext)
    return(
        <Route
        {...rest}
        render={(props) => 
            isUser && userType.admin ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login/admin' />
            )
        }
         />
    )
}

export default AdminRoute;