import React from 'react';


const TreehouseIndexItem = ({treehouse}) => {

    return (
        <li className="treehouse-li">
            <div className="treehouse-idx-photo-standin">
                THUMBNAIL GOES HERE
            </div>
            {/* <div className="treehouse-idx-photo">
                <img 
                    src={treehouse.photoUrls[0]}
                    alt={treehouse.name}/>
            </div> */}
            <div className="treehouse-idx-address">
                {treehouse.address}
            </div>
            <div className="treehouse-idx-name">
                {treehouse.name}
            </div>
            <div className="treehouse-idx-price">
                <span className="treehouse-idx-price-num">${treehouse.price}</span> / night
            </div>
        </li>
    )
}

export default TreehouseIndexItem;