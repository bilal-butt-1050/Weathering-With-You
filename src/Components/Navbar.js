import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <div className='navbar'>

                <div className='nav-logo'>
                    <span className='nav-text'>
                        Weathering With You
                    </span>
                </div>

                <div className='nav-search'>
                     <input type="text" placeholder='Search Location' className='search-box' value={props.city} onChange={(e) => props.setCity(e.target.value)}/>
                    <div className='search-icon' onClick={()=>props.getWeatherByCity()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

            </div>
        </>
    )
}
