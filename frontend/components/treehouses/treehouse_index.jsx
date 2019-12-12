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
            <div className="treehouses-container">
                <ul className="treehouses-ul">
                    {treehousesLis}
                </ul>
            </div>
        );
    };

}

export default TreehouseIndex;