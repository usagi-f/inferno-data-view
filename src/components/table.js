import Inferno from 'inferno';

const Table = (props) => {
    const row = () => {
        return props.station.map(elm => {
            return <div>{elm.name}</div>
        });
    };

    return (
        <div>
            {row()}
        </div>
    );
};

export default Table;
