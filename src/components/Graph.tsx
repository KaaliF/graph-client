import { AxiosResponse } from 'axios';

import React, { useEffect, useState } from 'react';
import http from '../service/http';
import Xarrow, { Xwrapper } from "react-xarrows";

import { Node } from './Node';
import EditGraph from './EditGraph';

function Graph() {
    const [nodes, setNodes] = useState<Array<string>>();
    const [edges, setEdges] = useState<Array<string>>();

    useEffect(() => {
        async function apiCall() {
            const { data, status }: AxiosResponse = await http.get('graph');
            if (status === 200) {
                setNodes(data.nodes);
                setEdges(data.link);
            }
        }
        apiCall();
    }, []);
    function renderGraph() {
        return (
            <div style={{ display: "flex" }}>
                <Xwrapper>
                    {renderNodes()}
                    {renderEdges()}
                </Xwrapper>
            </div>
        )

    }
    function renderNodes() {
        const data = nodes?.map((item: string, index: number) => <Node key={index} id={item} />);
        return data ? data : null;
    }

    function renderEdges() {
        return edges?.map((item: any, index: number) => <Xarrow
            key={index}
            start={item.from}
            end={item.to}
        />);
    }
    async function handleAddNode(param: string) {
        try {
            const { data, status } = await http.post('/graph/addnode', { node: param });
            if (status === 200)
                setNodes(data.nodes);
        }
        catch (e) {
            alert(e);
        }
    }
    async function handleAddVertice(e: any) {
        try {
            const { data, status } = await http.post('/graph/addedge', e);
            if (status === 200)
                setEdges(data.link);
        }
        catch (e) {
            alert(e);
        }
    }
    async function handleClear() {
        try {
            const { data, status } = await http.put('/graph/clear');
            if (status === 200) {
                setEdges(data.link);
                setNodes(data.nodes);
            }
        }
        catch (e) {
            alert(e);
        }
    }
    return (
        <>
            <p>Please add node firstly and drag them to see the proper link/vertice </p>
            <div> <EditGraph handleAddNode={handleAddNode} handleClear={handleClear} handleAddVertice={handleAddVertice} nodes={nodes} /></div>
            <div> {renderGraph()}</div>

        </>

    )
}

export default Graph;
