import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-zinc-400 mt-5">
            <div className="flex-1 ">
                <Link className='mr-6 text-2xl text-purple-800' to='/'>Home</Link>
                <Link className='mr-6 text-2xl text-purple-800' to='/'>Login</Link>
                <Link className='text-2xl text-purple-800' to='/'>Blog</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    {/* input */}
                </div>

            </div>
        </div>
    );
};

export default Header;