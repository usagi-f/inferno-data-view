import Inferno from 'inferno';
import Component from 'inferno-component';

import Heading from './../components/heading';
import Table from './../components/table';

import data from './../data/index';

class ViewContainer extends Component {
    render() {
        return (
            <div>
                <Heading label="Inferno Data View" />
                <Table data={data} />
            </div>
        )
    }
}

export default ViewContainer;
