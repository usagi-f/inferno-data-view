import Inferno from 'inferno';

const Table = (props) => {
    const row = () => {
        if (props.station.length === 0) return false;

        return props.station.map(elm => {
            return <div>{elm}</div>
        });
    };

    return (
        <div>
            {props.num}
            <button onClick={props.handleClick}>click</button>
            {row()}
        </div>
    );
};

export default Table;
