import React, { useState } from 'react';
import PageRank from './PageRank';
import Select from './Select';

function EditGraph(props: any) {
    const [value, setValue] = useState<string>('');

    const { handleAddNode, nodes, handleClear } = props;
    function handleChange(e: any) {
        if (e.target.value.length <= 1)
            setValue(e.target.value)
    }
    return (<div>
        <div>
            <input value={value} type="text" onChange={handleChange} />
            <button disabled={value === ''} style={{ marginLeft: 5 }} onClick={() => { handleAddNode(value); setValue(''); }}>Add Node</button>
        </div>
        <div>
            <Select values={nodes} {...props} />
        </div>
        <div>
            <PageRank nodes={nodes} />
        </div>
        <div style={{ margin: 20 }}>
            <button disabled={nodes?.length === 0} onClick={handleClear} >Clear Graph</button>
        </div>
    </div>)

}

export default EditGraph;