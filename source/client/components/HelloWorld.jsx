import React from 'react';
import cssModules from 'react-css-modules';
import * as styles from './HelloWorld.scss';

const HelloWorld = () => (
    <div styleName="hello">
        <div styleName="hello__world">
            Хелло ворлд нахуй
        </div>
    </div>
);

export default cssModules(HelloWorld, styles);
