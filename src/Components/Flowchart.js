import { useSelector } from 'react-redux';

import ReactFlow, {Controls} from 'react-flow-renderer';

const Flowchart = () => {

    const flowChartData = useSelector(state => state) // fetching redux store state for flowchart data

    const onLoad = (reactFlowInstance) => {
        reactFlowInstance.fitView();
    };

    return (
        <div style={{width: "100%", height: "90vh", display: "flex", justifyContent: "center"}}>
            <ReactFlow
                style={{ width: "100%", height:"100%" }}
                elements={flowChartData}
                onLoad={onLoad}
            >
                <Controls />
            </ReactFlow> 
        </div>
    )
}



export default Flowchart