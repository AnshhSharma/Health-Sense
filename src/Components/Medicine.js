import React from 'react'

export default function Medicine(props) {
    return (
        <div className='my-3'>
            <div className="card" style={{ margin: "auto" }} id='card'>
                <div className="d-flex justify-content-end" style={{ position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger" id='badge'>
                        <strike>{props.price} &#8377;</strike> &nbsp;&nbsp;{(props.price - props.price/5).toFixed(2)} &#8377;
                    </span>
                </div>
                <img src={props.image} className="card-img-top" alt={props.image} style={{height:'30vh',width: '15vw'}}/>
                <div className="card-bod y">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                    {/* <a href={newsUrl} className="btn btn-sm btn-primary" target='0'>Read More</a> */}
                </div>
            </div>
        </div>
    )
}
