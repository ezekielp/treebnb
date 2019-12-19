import React from 'react';
import TreehouseSearchIndexItem from './treehouse_search_index_item';

class TreehouseSearchIndex extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        let { treehouses } = this.props;
        const treehousesLis = treehouses.map((treehouse, idx) => {
            return <TreehouseSearchIndexItem
                key={idx}
                treehouse={treehouse} />
        });

        let numResults = treehouses.length;

        return (
            <div className="treehouse-search-idx-outer-container">
                <div className="treehouse-search-idx-left-container">
                    <h1>{numResults} places to stay</h1>
                    {treehousesLis}
                </div>
                <div className="treehouse-search-idx-map-container">

                </div>
            </div>
        );
    }

}

export default TreehouseSearchIndex;