import React from 'react';
import { Link } from 'react-router-dom';

const TreehouseIndexItem = ({treehouse}) => {

    return (
        <li className="treehouse-li">
            <Link to={`/treehouses/${treehouse.id}`}>
                {/* <div className="treehouse-idx-photo-standin">
                    THUMBNAIL GOES HERE
                </div> */}
                <div className="treehouse-idx-photo">
                    <div className="treehouse-idx-photo-child" style={{ backgroundImage: `url(${treehouse.photoUrls[0]})`}}>
                    </div>
                    {/* <img 
                        src={treehouse.photoUrls[0]}
                        alt={treehouse.name}/> */}
                </div>
            </Link>
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