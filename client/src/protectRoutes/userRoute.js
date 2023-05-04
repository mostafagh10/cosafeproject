import React , {useContext} from "react";
import {UserContext} from '../ContextAPI/User'
import {Route,Redirect} from 'react-router-dom'

const UserRoute = ({component : Component, ...rest}) => {
    const { isUser , userType, user } = useContext(UserContext)
    return(
        <Route
        {...rest}
        render={(props) => 
            isUser && userType.client ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login/client' />
            )
        }
         />
    )
}

export default UserRoute;