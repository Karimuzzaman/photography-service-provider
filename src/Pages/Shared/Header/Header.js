import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-zinc-400 mt-5">
            <div className="flex-1 flex-col md:flex-row">
                <Link className='mr-6 text-2xl text-purple-800' to='/'>Home</Link>
                <Link className='mr-6 text-2xl text-purple-800' to='/services'>Services</Link>
                <Link className='text-2xl text-purple-800 mr-6' to='/blogs'>Blog</Link>
                {
                    user?.uid ?
                        <>
                            <button onClick={handleLogOut} className="btn btn-active btn-ghost mr-6">Logout</button>
                            <Link to='/myreview' className='text-2xl text-purple-800 mr-6'>My Reviews</Link>
                            <Link to='/addservices' className='text-2xl text-purple-800 mr-6'>Add Services </Link>

                        </>
                        :
                        <>
                            <Link className='text-2xl text-purple-800' to="/login">Login</Link>
                        </>
                }
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">

                </div>

            </div>
        </div>
    );
};

export default Header;