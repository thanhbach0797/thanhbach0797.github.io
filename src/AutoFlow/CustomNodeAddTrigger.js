import React, { useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
export default ({ data, selected }) => {
    const [outline, setOutLine] = useState("");
    const styleAddTrigger = {
        backgroundColor: '#fafafa',
        textAlign: 'center',
        padding: 20,
        borderRadius: 5,
        width: "200px",
        height: "100px",
        boxShadow: '2px 2px rgb(143 206 219)',
        outline: outline
    }
    return (
        <div
            style={styleAddTrigger}
            onMouseEnter={() => {
                setOutLine("1px solid rgb(143 206 219)");
            }
            }
            onMouseLeave={() => {
                setOutLine("");
            }
            }
        >
            <Handle type="target" position="top" />
            <div className="btn"
                style={{
                    'height': '100%',
                    'width': '100%',
                    'backgroundColor': 'inherit',
                    'border': 'dashed 1px #afafaf',
                    'display': 'flex',
                    'flexDirection': 'column',
                    'justifyContent': 'center'
                }}
                onClick={(event) => data.onAddNode(data.id)}
            >
                <div style={{
                    'color': '#afafaf'
                }}>
                    Hành động
                </div>
                <div
                    style={{
                        'color': '#656565'
                    }}>
                    +Thêm hành động
                </div>
            </div>
            <Handle type="source" position="bottom" />
        </div>
    );
};
