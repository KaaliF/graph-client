import React, { useState } from 'react';

function Select(props: any) {

    const { values, handleAddVertice } = props;
    const [vertice, setVertice] = useState({ from: '', to: '' });

    return (
        <div style={{ margin: 10 }}>
            <label style={{ margin: 5 }}>From</label>
            <select disabled={values?.length === 0} onChange={(e) => setVertice({ from: e.target.value, to: vertice.to })} >
                <option disabled selected> --- </option>
                {values?.map((item: string, index: number) => <option key={index} value={item}>{item}</option>)}
            </select>
            <label style={{ margin: 5 }}>To</label>
            <select disabled={(vertice.from === '' || values?.length === 0)} onChange={(e) => setVertice({ from: vertice.from, to: e.target.value })}>

                {values?.map((item: string, index: number) => <option key={index} value={item}>{item}</option>)}
            </select>
            <button disabled={(vertice.to === '' || values?.length === 0)} style={{ marginLeft: 5 }} onClick={() => handleAddVertice(vertice)}>Add Vertice</button>
        </div>)
}

export default Select;