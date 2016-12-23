import Inferno from 'inferno';
import Component from 'inferno-component';

import Heading from './../components/heading';
import Table from './../components/table';

import data from './../data/index';

class ViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            viewStation: []
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        if (data.station.length <= this.state.num) return false;
        const item = data.station[this.state.num].name;
        this.setState({
            num: this.state.num + 1,
            viewStation: this.state.viewStation.concat(item)
        })
    }
    render() {
        return (
            <div>
                <Heading label="Inferno Data View" />
                <Table station={this.state.viewStation} handleClick={this.addItem} />
            </div>
        )
    }
}

export default ViewContainer;
