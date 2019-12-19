import React from 'react';
import { Link } from 'react-router-dom';

const TreehouseSearchIndexItem = ({treehouse}) => {

    return (
        <li className="treehouse-search-li">
            <hr className="treehouse-search-li-hr" />
            <div className="treehouse-search-li-container">
                <Link to={`/treehouses/${treehouse.id}`}>
                    <div className="treehouse-search-idx-photo">
                        <div className="treehouse-search-idx-photo-child" style={{ backgroundImage: `url(${treehouse.photoUrls[0]})` }}>
                        </div>
                    </div>
                </Link>
                <div className="treehouse-search-idx-item-right-side">
                    <div className="treehouse-search-idx-tag-header"
                    >
                        Entire treehouse
                    </div>
                    <div className="treehouse-search-idx-name">
                        {treehouse.name}
                    </div>
                    <div className="treehouse-search-idx-address">
                        {treehouse.address}
                    </div>
                    <div className="treehouse-search-idx-price">
                        <span className="treehouse-search-idx-price-num">${treehouse.price}</span> / night
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TreehouseSearchIndexItem;