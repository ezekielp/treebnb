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

        return (
            <div className="treehouse-search-idx-outer-container">
                <div className="treehouse-search-idx-left-container">
                    {treehousesLis}
                </div>
                <div className="treehouse-search-idx-map-container">

                </div>
            </div>
        );
    }

}

export default TreehouseSearchIndex;