import React from 'react'
import { css } from "@emotion/css"

const Bird = (props) => {
    return (
        <>
            <div className="card card-hover-zoom card-img p-0 m-4" style={{width: "18rem"}}>
                <img src={props.image} height={200} className="card-img-top" alt={props.bird_name} />
                <div className="card-body">
                    <h3><span className='lead text-secondary fw-bold'>{props.bird_name}</span></h3>
                    <h3>שם מדעי:<br/> <span className='lead text-secondary fw-bold'>{props.scientific_name}</span></h3>
                    <h4>טבעת: <span className='lead text-secondary fw-bold'>{props.ring}</span></h4>
                </div>
            </div>
        </>
    )
}

export default Bird
