import ReactFlow, {
    removeElements,
    isNode,
    Background,
    MiniMap,
    Controls,
    useStore,
    useZoomPanHelper
} from 'react-flow-renderer';
import React, { useCallback, useState, useRef, useEffect } from "react";
import CustomNode from './CustomNode';
import NodeAddTrigger from './CustomNodeAddTrigger';
import { AiOutlineLeft, AiOutlineEdit } from "react-icons/ai";
import ShowConfirmModal from './ConfimModal';
import ShowSuccessModal from './SuccessModal';
import ShowErrorModal from './ErrorModal';
import { useNavigate } from 'react-router-dom';
const nodeTypes = {
    nodeAddTrigger: NodeAddTrigger,
    customNode: CustomNode,
}
let onDragId;
const onNodeDragStop = (event, node) => { onDragId = node.data.id };
const onNodeDrag = (event, node) => console.log('drag stop', node.data.id);
const onElementClick = (event, element) => console.log('click', element);

const AutoFlow = () => {
    const store = useStore();
    const { zoomIn, zoomOut, setCenter } = useZoomPanHelper();

    const focusNode = (marginX, marginY, zoom) => {
        const { nodes } = store.getState();
        if (nodes.length) {
            const node = nodes[nodes.length - 1];

            const x = node.__rf.position.x + node.__rf.width / 2 - marginX;
            const y = node.__rf.position.y + node.__rf.height / 2 - marginY;
            // const zoom = 1;

            setCenter(x, y, zoom);
        }
    };
    
    
    const navigate = useNavigate();
    const navigateAct = () => {
        navigate("/")
    }
    document.title = "Zetamail - " + "AutoFlow - Test";
    const onClick = (id, type) => {
        switch (type) {
            case 1: // edit trigger
                break;
            case 2:  // copy trigger
            case 3:  // fire trigger
            case 4:  // delete trigger
                setTypeShowModal(type);
                setConfirmModalShow(true)
                break;
        }
        // if (type == 1) {
        //     addNode()
        // } else {
        //     delectNode(id);
        // }
    };

    const onAddNodeTrigger = async (id) => {
        if (onDragId == id) {
            onDragId = "";
        } else {
            // let data = {
            //     onClick: onClick,
            //     label: "CustomNode",
            //     id: "1",
            //     showAction: false,
            //     typeIcon: 2,
            // }
            let data = {};
            let randomType = Math.floor(Math.random() * 7) + 1
            data.typeIcon = randomType;
            let position = { x: 0, y: 400 }
            onAddNodeTriggerAct(id, data);
        }
    };

    const initialElements = [
        {
            id: "0",
            type: "nodeAddTrigger",
            data: {
                onAddNode: onAddNodeTrigger,
                label: "CustomNode",
                id: "0",
                showAction: false,
            },
            position: { x: 100, y: 100 }
        },
        // {
        //     id: "2",
        //     type: "nodeAddTrigger",
        //     data: {
        //         onAddNode: onAddNodeTrigger,
        //         label: "CustomNode",
        //         id: "2",
        //         showAction: false,
        //     },
        //     position: { x: 600, y: 400 }
        // },
        // {
        //     id: "3",
        //     type: "nodeAddTrigger",
        //     data: {
        //         onAddNode: onAddNodeTrigger,
        //         label: "CustomNode",
        //         id: "3",
        //         showAction: false,
        //     },
        //     position: { x: -300, y: 400 }
        // },
        // {
        //     id: "e1-2",
        //     //type:'customEdge',
        //     type: 'smoothstep',
        //     data: { text: 'custom edge' },
        //     label: 'Yes',
        //     labelStyle: { fill: '#1fa792', fontWeight: 700, fontSize: 14 },
        //     labelBgPadding: [8, 4],
        //     labelBgBorderRadius: 4,
        //     labelBgStyle: { fill: '#83ddd2'},
        //     arrowHeadType: 'arrow',
        //     source:"1",
        //     target: "2"
        // },
        // {
        //     id: "e1-3",
        //     type: 'smoothstep',
        //     data: { text: 'custom edge' },
        //     label: 'No',
        //     labelStyle: { fill: '#d8545b', fontWeight: 700, fontSize: 14 },
        //     labelBgPadding: [8, 4],
        //     labelBgBorderRadius: 4,
        //     labelBgStyle: { fill: '#f6abae'},
        //     arrowHeadType: 'arrow',
        //     source:"1",
        //     target: "3"
        // },
        // {
        //     id: "4",
        //     type: "customNode",
        //     data: {
        //         onClick: onClick,
        //         label: "CustomNode",
        //         id: "1",
        //         showAction: false,
        //         typeIcon: 2
        //     },
        //     position: { x: 600, y: 100 }
        // },
        // {
        //     id: "5",
        //     type: "customNode",
        //     data: {
        //         onClick: onClick,
        //         label: "CustomNode",
        //         id: "1",
        //         showAction: false,
        //         typeIcon: 3
        //     },
        //     position: { x: 1100, y: 100 }
        // },
        // {
        //     id: "6",
        //     type: "customNode",
        //     data: {
        //         onClick: onClick,
        //         label: "CustomNode",
        //         id: "1",
        //         showAction: false,
        //         typeIcon: 4
        //     },
        //     position: { x: 1600, y: 100 }
        // },
        // {
        //     id: "7",
        //     type: "customNode",
        //     data: {
        //         onClick: onClick,
        //         label: "CustomNode",
        //         id: "1",
        //         showAction: false,
        //         typeIcon: 5
        //     },
        //     position: { x: 2100, y: 100 }
        // },
        // {
        //     id: "8",
        //     type: "customNode",
        //     data: {
        //         onClick: onClick,
        //         label: "CustomNode",
        //         id: "1",
        //         showAction: false,
        //         typeIcon: 6
        //     },
        //     position: { x: 2600, y: 100 }
        // },
    ]
    const [rfInstance, setRfInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => { addEdge(params, els) });
    const onLoad = (reactFlowInstance) => setRfInstance(reactFlowInstance);
    const [flowName, setFlowName] = React.useState("");
    const [editFlowName, setEditFlowName] = React.useState(false);
    const [ConfirmModalShow, setConfirmModalShow] = React.useState(false);
    const [SuccessModalShow, setSuccessModalShow] = React.useState(false);
    const [ErrorModalShow, setErrorModalShow] = React.useState(false);
    const [typeShowModal, setTypeShowModal] = React.useState(0);
    const yPos = useRef(0);
    
    let [els, setEls] = useState([{}]);
    useEffect(()=>{
        const elsTemp = els.filter((els) => isNode(els));
        if(elsTemp.length >= 3 && elsTemp[elsTemp.length - 3].data.typeIcon == 7){
            focusNode(200, 200, 0.8);
        }else if (elsTemp.length > 1){
            focusNode(-200, 200, 0.8);
        }else{
            focusNode(-100, -100, 1.5);
        }
    },[els]);
    useEffect(() => {
        setEls(initialElements);
    }, []);
    

    const addNode = useCallback(() => {
        setEls((els) => {
            return [
                ...els,
                {
                    id: els.length + "",
                    type: "customNode",
                    data: {
                        onClick: onClick,
                        label: "CustomNode",
                        id: els.length + "",
                        showAction: false,
                        typeIcon: 2
                    },
                    position: { x: 100, y: yPos.current }
                }
            ];
        });
    }, []);

    const onHoverNodeact = useCallback((id, isHover) => {
        setEls((els) => {
            return els.map((el) => {
                if (el.id == id) {
                    el.data = {
                        ...el.data,
                        isHover: isHover
                    };
                }
                return el;
            });
        });
    }, []);
    const onAddNodeTriggerAct = useCallback((id, data) => {


        setEls((els) => {
            return els.map((el) => {
                if (el.id == id) {
                    el.type = 'customNode';
                    el.data = {
                        ...el.data,
                        onClick: onClick,
                        typeIcon: data.typeIcon
                    }
                    el.position = { x: el.position.x - 100, y: el.position.y }
                }
                return el;
            });
        });
        
        if (data.typeIcon != 7) {
            setEls((els) => {
                let node = els.filter((el) => el.id === id);
                const allNode = els.filter((el) => isNode(el));
                let lenght = allNode.length;
                return [
                    ...els,
                    {
                        id: lenght + "",
                        type: "nodeAddTrigger",
                        data: {
                            onAddNode: onAddNodeTrigger,
                            label: "CustomNode",
                            id: lenght + "",
                            showAction: false,
                        },
                        position: { x: node[0].position.x + 100, y: node[0].position.y + 500 }
                    }
                ];
            });
            setEls((els) => {
                const allNode = els.filter((el) => isNode(el));
                addEdgeDefault(id, allNode[allNode.length - 1].id + "");
                return els;
            });
            
        } else {
            setEls((els) => {
                let node = els.filter((el) => el.id === id);
                const countNode = els.filter((el) => isNode(el)).length;
                return [
                    ...els,
                    {
                        id: countNode + "",
                        type: "nodeAddTrigger",
                        data: {
                            onAddNode: onAddNodeTrigger,
                            label: "CustomNodeFalse",
                            id: countNode + "",
                            showAction: false,
                        },
                        position: { x: node[0].position.x - 300, y: node[0].position.y + 500 }
                    },
                    {
                        id: (countNode + 1) + "",
                        type: "nodeAddTrigger",
                        data: {
                            onAddNode: onAddNodeTrigger,
                            label: "CustomNodeTrue",
                            id: (countNode + 1) + "",
                            showAction: false,
                        },
                        position: { x: node[0].position.x + 500, y: node[0].position.y + 500 }
                    }
                ];
            });

            setEls((els) => {
                const allNode = els.filter((el) => isNode(el));
                addEdgeNo(id, allNode[allNode.length - 2].id + "");
                addEdgeYes(id, allNode[allNode.length - 1].id + "");
                return els;
            });

        }
    }, []);
    const updateNode = useCallback((id) => {
        setEls((els) => {
            return els.map((el) => {
                if (el.id = '2') {
                    el.id = '1';
                } else {
                    el.id = '2';
                }
                el.data = {
                    ...el.data,
                    label: "CustomNodebach" + Math.floor(Math.random() * 2),
                    showAction: Math.floor(Math.random() * 2) ? true : false
                };
                return el;
            });
        });
    }, []);
    const onShowActionsNodeAct = useCallback((id, isHover) => {
        setEls((els) => {
            return els.map((el) => {
                if (el.id == id) {
                    el.data = {
                        ...el.data,
                        showAction: isHover
                    };
                }
                return el;
            });
        });
    }, []);
    const addEdge = useCallback(({ source, target }) => {
        setEls((els) => {
            return [
                ...els,
                {
                    id: Number(els[els.length - 1].id) + 1 + "",
                    source,
                    target
                }
            ];
        });
    }, []);
    const addEdgeDefault = (source, target) => {
        setEls((els) => {
            return [
                ...els,
                {
                    id: "edgde" + Number(els[els.length - 1].id) + "",
                    type: 'smoothstep',
                    arrowHeadType: 'arrow',
                    source,
                    target
                }
            ];
        });
    }
    const addEdgeYes = (source, target) => {
        setEls((els) => {
            return [
                ...els,
                {
                    id: "edge" + source + "-" + target + "",
                    type: 'smoothstep',
                    data: { text: 'custom edge' },
                    label: 'Yes branch',
                    labelStyle: { fill: '#1fa792', fontWeight: 700, fontSize: 18 },
                    labelBgPadding: [8, 4],
                    labelBgBorderRadius: 4,
                    labelBgStyle: { fill: '#83ddd2' },
                    arrowHeadType: 'arrow',
                    source,
                    target
                }
            ];
        });
        // setEls((els) => {
        //     console.log("React is awesome!"); // "React is awesome!"
        //     console.log(els); // "React is awesome!"
        //     return els
        // });
    }
    const addEdgeNo = (source, target) => {
        setEls((els) => {
            return [
                ...els,
                {
                    id: "edge" + source + "-" + target + "",
                    type: 'smoothstep',
                    data: { text: 'custom edge' },
                    label: 'No branch',
                    labelStyle: { fill: '#d8545b', fontWeight: 700, fontSize: 18 },
                    labelBgPadding: [8, 4],
                    labelBgBorderRadius: 4,
                    labelBgStyle: { fill: '#f6abae' },
                    arrowHeadType: 'arrow',
                    source,
                    target
                }
            ];
        });
    }
    const updatePos = () => {
        setEls((els) => {
            return els.filter((el) => {
                if (isNode(el)) {
                    return {
                        ...el,
                        position: {
                            x: Math.random() * 400,
                            y: Math.random() * 400,
                        },
                    };
                }
                return el;
            });
        });
    };
    const delectNode = (id) => {
        setEls((els) => {
            let arrTemp = [];
            els.forEach((el, index) => {
                if (el.id != id) {
                    arrTemp.push(el);
                }
            });
            return arrTemp;
        });
    };

    const logToObject = () => console.log(rfInstance.toObject());
    const resetTransform = () => rfInstance.setTransform({ x: 0, y: 0, zoom: 1 });
    return (
        <ReactFlow
            elements={els}
            onLoad={onLoad}
            onElementsRemove={onElementsRemove}
            onNodeDragStop={onNodeDragStop}
            onConnect={onConnect}
            className="react-flow-basic-example"
            defaultZoom={0.5}
            minZoom={0.2}
            maxZoom={4}
            nodeTypes={nodeTypes}
        >
            <Background />

            <div style={{ position: 'absolute', left: 10, top: 10, zIndex: 4, background: 'white' }}>
                <AiOutlineLeft style={{ 'fontSize': '24px' }} onClick={() => navigateAct()} />
                {editFlowName ?
                    <input style={{ 'marginLeft': '5px' }} value={flowName} type="text" placeholder="FlowName" onChange={(event) => setFlowName(event.target.value)} />
                    :
                    <span style={{ 'marginLeft': '5px' }}>{flowName}</span>
                }
                <AiOutlineEdit style={{ 'fontSize': '24px', 'marginLeft': '5px' }} onClick={(event) => setEditFlowName(!editFlowName)} />
            </div>
            <div style={{ position: 'absolute', right: 10, top: 10, zIndex: 4 }}>
                {/* <button onClick={resetTransform} style={{ marginRight: 5 }}>
                    reset transform
                </button>
                <button onClick={updateNode} style={{ marginRight: 5 }}>
                    change pos
                </button>
                <button onClick={logToObject}>toObject</button> */}
                <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={() => setConfirmModalShow(true)} >confirm</button>
                <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={() => setSuccessModalShow(true)}>success</button>
                <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={() => setErrorModalShow(true)} >error</button>
                <button className="btn btn-outline-primary" style={{ marginRight: '5px' }} onClick={() => setConfirmModalShow(true)} >Lưu</button>
                <button className="btn btn-primary" style={{ width: '100px' }} onClick={(focusNode)}>Lưu và bắt đầu</button>
            </div>
            <ShowConfirmModal
                show={ConfirmModalShow}
                onCancel={() => setConfirmModalShow(false)}
                onOk={() => {
                    setConfirmModalShow(false);
                    setSuccessModalShow(true)
                }}
                type={typeShowModal}
            />
            <ShowSuccessModal
                show={SuccessModalShow}
                onCancel={() => setSuccessModalShow(false)}
            />
            <ShowErrorModal
                show={ErrorModalShow}
                onCancel={() => setErrorModalShow(false)}
            />
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};

export default AutoFlow;