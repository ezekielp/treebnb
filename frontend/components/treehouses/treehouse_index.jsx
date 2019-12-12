import React from 'react';
import TreehouseIndexItem from './treehouse_index_item';

class TreehouseIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTreehouses();
    }

    render() {
        let { treehouses } = this.props;
        const treehousesLis = treehouses.map((treehouse, idx) => {
            return <TreehouseIndexItem
                        key={idx}
                        treehouse={treehouse} />
        });

        return (
            <div className="treehouses-idx-container">
                <h2 className="treehouses-idx-header">
                    Top-rated nature lofts
                </h2>
                <h3 className="treehouses-idx-subhead">
                    Explore some of the most famous treehouses in history
                </h3>
                <ul className="treehouses-ul">
                    {treehousesLis}
                </ul>
            </div>
        );
    };

}

export default TreehouseIndex;