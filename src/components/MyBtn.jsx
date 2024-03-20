import React from 'react'

const MyBtn = (props) => {
    const isActive = (props.number === props.activeButton);
    return (
      <button
       onClick={() => props.onEach(props.number)} 
       className={`btn btn-light m-2 ${isActive ? 'activeBtnPagination' : ''}`} >
        {props.number}
      </button>
    );
  };

export default MyBtn