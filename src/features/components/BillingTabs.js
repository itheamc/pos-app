import React, { useEffect, useState } from 'react'
import './billing_tabs_style.css'
import { useSelector, useDispatch } from 'react-redux'
import { loginUserAsync, selectToken } from '../../states/login/loginSlice'

const BillingTabs = () => {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);


    const [activeTab, setActiveTab] = useState(0);
    const [email, setEmail] = useState('itheamc@gmail.com');
    const [password, setPassword] = useState('5utRmDAAqz');

    useEffect(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }, []);

    const handleLogin = () => {
        dispatch(loginUserAsync({ email, password }));
    }


    return (
        <div className="tabs-container">
            {/* <ul className='tabs-list'>
                <li className="active">
                    <a>
                        <span className="icon is-small"><i className="fas fa-user" /></span>
                        <span>Personal</span>
                        <span>x</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon is-small"><i className="fas fa-building" /></span>
                        <span>Business</span>
                        <span>x</span>
                    </a>
                </li>
            </ul> */}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default BillingTabs