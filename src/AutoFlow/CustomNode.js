import React, { useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';

import { FiSend } from "react-icons/fi";
import {
    BsDoorOpen,
    BsTrash,
    BsFillCaretDownFill,
    BsFolderPlus,
    BsLink,
    BsCalendarDate,
    BsTrash2,
    BsBoxSeam,
    BsCalendarDay,
    BsDiagram2,
    BsPencil,
    BsClipboard,
    BsCheck2Square,
} from "react-icons/bs";

export default ({ data, selected }) => {

    const [hover, setHover] = useState(false);
    const [showaction, showAction] = useState(false);
    const [nodeBorder, setBorder] = useState("node-border");
    const [nodeBorderSub, setBorderSub] = useState("node-border-sub");
    const [seeMore, setSeeMore] = useState("node-body3-see-more");
    const [editBtn, setEditBtn] = useState(0);

    const opacityBtn = {
        opacity: 1,
        color: 'white',
        textDecoration: hover ? 'underLine' : 'unset'
    }
    const icon = data.typeIcon == 1 ?
        <FiSend />
        : data.typeIcon == 2 ?
            <BsFolderPlus />
            : data.typeIcon == 3 ?
                <BsTrash2 />
                : data.typeIcon == 4 ?
                    <BsBoxSeam />
                    : data.typeIcon == 5 ?
                        <BsCalendarDay />
                        : data.typeIcon == 6 ?
                            <BsFolderPlus />
                            :
                            <BsDiagram2 />
    return (
        <div onMouseEnter={() => {
            setHover(true);
            setBorderSub("node-border-sub-hover");
            setEditBtn(1);
        }
        }
            onMouseLeave={() => {
                setHover(false);
                showAction(false);
                setBorderSub("node-border-sub");
                setEditBtn(0);
            }
            }
            className={nodeBorder}
        >
            <div className={nodeBorderSub}>
                <Handle type="target" position="top" />
                <div className="node-header">
                    <div
                        style={{
                            'display': 'flex',
                            'alignItems': 'center',
                            'color': 'white',
                        }}
                    >
                        <div className="header-icon">{icon}</div>
                        <span style={{
                            'marginLeft': '5px',
                        }}>
                            Giảm giá cho khách hàng quan tâm
                        </span>
                    </div>
                    <div>
                        <div onClick={() => showAction(true)}
                            style={opacityBtn}
                        >
                            <span>Actions</span>
                        </div>
                    </div>
                </div>
                {showaction ?
                    // <div
                    //     className="actions"
                    // >
                    //     <button className="btn btn-outline-primary" onClick={(event) => onClick(1)}>Edit</button>
                    //     <button className="btn btn-danger" onClick={(event) => onClick(2)}><BsTrash/></button>
                    // </div>
                    <div className="actions">
                        <a className="dropdown-item" onClick={(event) => data.onClick(data.id, 1)} href="#"><BsPencil /> Chỉnh sửa hành động</a>
                        <a className="dropdown-item" onClick={(event) => data.onClick(data.id, 2)} href="#"><BsClipboard /> Sao chép hành động</a>
                        <a className="dropdown-item" onClick={(event) => data.onClick(data.id, 3)} href="#"><BsCheck2Square /> Kíchh hoạt hành động</a>
                        <div className="dropdown-divider" style={{ width: '100%' }}></div>
                        <a className="dropdown-item" onClick={(event) => data.onClick(data.id, 4)} href="#"><BsTrash /> Xóa hành động</a>
                    </div>
                    : null
                }

                <div className="node-body">
                    <div className="node-body2">
                        <div className="node-body3" className={seeMore}>
                            <div className="node-body4">
                                <div className="node-body5">
                                    <p className="action">
                                        <span>Một chiến dịch email</span>
                                        <strong> "Tên_chiến_dịch_email" </strong>
                                        <span> Đã mở </span>
                                        <strong> [Link_xem_nội_dung_chiến dịch]</strong>
                                    </p>
                                    <p className="action">
                                        <span>Thực hiện sau 1 giờ</span>
                                    </p>
                                </div>
                            </div>
                            {/* <p className="action">
                                <span>Gửi một nội dung email có sẵn</span>
                                <strong> "Tên_nội_dung_email" </strong>
                                <span>, </span>
                                <strong> [Xem_Trước]</strong>
                            </p>
                            <p className="action">
                                <span>Kích hoạt / Không kích hoạt</span>
                            </p> */}
                        </div>
                    </div>
                </div>
                <Handle type="source" position="bottom" />
            </div>
            {/* <div>
                <a href="" onClick={()=> setSeeMore("")}>see more</a>
            </div> */}
        </div>
    );
};
