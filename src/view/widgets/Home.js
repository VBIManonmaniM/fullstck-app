import React from "react";
import {
    useLocation,
    useNavigate
} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    return <b onClick={() => navigate('/')}>
        Home
    </b>
}

export default Home