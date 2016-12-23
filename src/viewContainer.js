import Inferno from 'inferno';
import Heading from './heading';

const ViewContainer = (props) => {
    return (
        <div>
            <Heading label="Inferno Data View" />
            {props.msg}
        </div>
    );
};

export default ViewContainer;
