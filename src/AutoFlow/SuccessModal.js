import {Button, Modal} from 'react-bootstrap';
import { 
    BsQuestionCircle,
    BsCheckCircle
} from "react-icons/bs";
import React, { useEffect, useState } from 'react';
export default function ShowModal  (props) {
    const tilte = "Xác nhận";
    // const type = props.type == 1 ? "kích hoạt" : props.type == 2 ? "sao chép" : "xóa";
    const data = ["https://thanhbach0797.github.io/autoFlowTest", "https://thanhbach0797.github.io/autoFlowTest", "https://thanhbach0797.github.io/autoFlowTest", "https://thanhbach0797.github.io/autoFlowTest"];
    var indents = [];
    for (var i = 0; i < data.length; i++) {
      indents.push(<span className='indent' key={i}></span>);
    }
    const [viewMore, setViewMore] = useState(false);
    const message = props.data;
    const type = props.type;
    useEffect(()=>{
      console.log(props)
      setViewMore(false);
    },[props]);
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-success"
      >
        <Modal.Header className="modal-header-success">
          <div className="x-button">
            <button type="button" className="btn-close success" aria-label="Close" onClick={props.onCancel}></button>
          </div>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-header-success-icon">
             <BsCheckCircle className="icon-sucess"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-success">
          {type != 0 ?
          <div>
            <p>Bạn đã xóa thành công hành động này.</p>
            <p>Việc xóa hành động sẽ ngừng chạy các liên hệ đang chờ kích hoạt thao tác này.</p>
            {!viewMore ?
              <p>[<a className="success-link" onClick={(event) => setViewMore(true)}> Xem chi tiết liên hệ ở đây </a>]</p>
            : <div className="showMore_model-success">
                {data.map((item, index) => (
                  <div key={index}>
                  <a target="_blank" href={item} key={index}>{item}</a>
                  </div>
                ))}
                [<a className="success-link" onClick={(event) => setViewMore(false)}> Thu gọn </a>]
            </div>
            }
          </div>
          : 
          <p>{message}</p>
          
          }
        </Modal.Body>
      </Modal> 
    );
  }