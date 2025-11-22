import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../context/AuthContext/AuthContext';

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({ children }) {
    const { user,loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <h1>Loading...</h1>
    }

    if (!user) {
       return <Navigate to={'/signin'} state={location.pathname} />
    }
    return children
}
