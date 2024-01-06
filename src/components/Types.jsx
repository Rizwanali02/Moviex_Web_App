import React from 'react'
import { Link } from 'react-router-dom'

export const Types = () => {
    return (
        <nav className="flex-wrap TypeClass" >
            <div className="">
                <ul className='list-unstyled d-flex flex-wrap  category'>
                    <li className='me-3 m-1'>
                       <button className='btn btn-warning'>
                         <Link className='text-decoration-none text-black' to="/action">
                            Action
                        </Link>
                        </button>
                    </li>
                    <li className='me-3 m-1'>
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/comedy">
                            Comedy
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/drama">
                            Drama
                        </Link>
                        </button>
                    </li>
                    <li>
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/animation">
                        Animation
                        </Link>
                        </button>
                    </li>
                    <li>
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/adventure">
                        adventure
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/crime">
                        Crime
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/horror">
                        Horror
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/music">
                        Music
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/romance">
                        Romance
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/sciencefiction">
                        Science Fiction
                        </Link>
                        </button>
                    </li>
                    <li className="m-1">
                    <button className='btn btn-warning'>
                        <Link className='text-decoration-none text-black ' to="/tvmovie">
                        TV Movie
                        </Link>
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
