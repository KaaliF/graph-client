import React from 'react';
import Draggable from 'react-draggable';

import { useXarrow } from "react-xarrows";
const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };
export const Node = ({ id }: any) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id} style={boxStyle}>
                {id}
            </div>
        </Draggable>
    );
};