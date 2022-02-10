import { Co2Sharp } from "@mui/icons-material";
import NodeComponent from "../../Components/NodeComponent";

// styles applied to each node in the flowchart
let style = {
    background: '#D6D5E6',
    color: '#333',
    border: '1px solid #222138',
    width: 200,
    fontSize:"12px"
}

// initial state of the flowchart showing basic SOP for the experiment
const initialState = [
    {
        id: 'horizontal-1',
        sourcePosition: 'bottom',
        type: 'input',
        className: 'dark-node',
        data: { label: <NodeComponent name={"Fill the beaker with 1000ul water"} /> },
        position: { x: 10, y: 10 },
        style: style
    },
    {
        id: 'horizontal-2',
        sourcePosition: 'right',
        targetPosition: 'top',
        data: { label: 'Place pipette tip on pipettor' },
        position: { x: 10, y: 120 },
        style: style
    },
    {
        id: 'horizontal-3',
        sourcePosition: 'bottom',
        targetPosition: 'left',
        data: { label: 'Weigh pipette at 100% vol.' },
        position: { x: 400, y: 50 },
        style: style
    },
    {
        id: 'horizontal-4',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: { label: 'Aspirate and dispense 100% of vol. into beaker' },
        position: { x: 400, y: 200 },
        style: style
    },
    {
        id: 'horizontal-5',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: { label: 'Record the weigth in the table' },
        position: { x: 400, y: 280 },
        style: style
    },
    {
        id: 'horizontal-6',
        sourcePosition: 'right',
        targetPosition: 'top',
        data: { label: 'Tare the balance' },
        position: { x: 400, y: 360 },
        style: style
    },
    {
        id: 'horizontal-7',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Calculate mean, std. deviation, accuracy and precision' },
        position: { x: 750, y: 50 },
        style: style
    },
    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        animated: true,
    },
    {
        id: 'horizontal-e2-3',
        source: 'horizontal-2',
        type: 'smoothstep',
        target: 'horizontal-3',
        animated: true,
    },
    {
        id: 'horizontal-e3-4',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-4',
        arrowHeadType: 'arrowclosed',
        label: 'Repeat 5 times',
        labelStyle:{
            fontSize:"12px",
            fontWeight:600,
            fill: '#f6ab6c'
        }
    },
    {
        id: 'horizontal-e4-5',
        source: 'horizontal-4',
        type: 'smoothstep',
        target: 'horizontal-5',
        arrowHeadType: 'arrowclosed',
    },
    {
        id: 'horizontal-e5-6',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-6',
        arrowHeadType: 'arrowclosed',
    },
    {
        id: 'horizontal-e6-7',
        source: 'horizontal-6',
        type: 'smoothstep',
        target: 'horizontal-7',
        animated: true,
    },
]

// flowchart data reducer, triggered when the user changes the label of the first node
const FlowchartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SET_NEW_NODE_NAME':

            // removing the first node and taking the remaining array
            let remainingArr = state.filter((obj) => obj.id !== 'horizontal-1')

            // return a new array with new flowchart data (changed label of the first node)
            return [
                {
                    ...state[0],
                    data: { label: <NodeComponent name={action.data} /> },
                    
                },
                ...remainingArr
            ];

        default:
            return state;
    }
}

export default FlowchartDataReducer