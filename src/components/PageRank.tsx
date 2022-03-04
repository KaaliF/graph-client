import React, { useState } from 'react';
import http from '../service/http';

function PageRank(props: any) {
    const { nodes } = props;
    const [page, setPage] = useState<any>({});
    async function handleAPI() {
        const { data, status } = await http.get('graph/pagerank');
        if (status === 200)
            setPage(data);
    }
    return (<div style={{ margin: 20 }}>
        {Object.keys(page).map((item: string) => <div>{item}: {page[item]}   </div>)}
        <button disabled={nodes?.length < 2} style={{ margin: 5 }} onClick={handleAPI}>Calculate PageRank</button>
    </div>)

}

export default PageRank;