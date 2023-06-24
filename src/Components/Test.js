import React from 'react'

export default function Test(props) {
  return (
    <div className='my-3 p-3'>
            <div className="card" style={{ margin: "auto" ,padding: '25px'}} id='card'>
                <div className="d-flex justify-content-end" style={{ position: 'absolute', right: '24px' }}>
                    <span className="badge rounded-pill bg-danger" id='badge'>
                        <strike>{props.price} &#8377;</strike> &nbsp;&nbsp;{(props.price - props.price/20).toFixed(2)} &#8377;
                    </span>
                </div>
                <img src={props.image} className="card-img-top" alt="..." style={{height:'30vh',width: '100%'}}/>
                <div className="card-bod y">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </div>
  )
}
