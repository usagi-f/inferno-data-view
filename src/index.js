import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';

import ViewContainer from './viewContainer';

const msg = 'ViewTest';

InfernoDOM.render(
    <ViewContainer msg={msg} />,
    document.getElementById('app')
);
