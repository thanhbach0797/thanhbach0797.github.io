import {Button, Modal} from 'react-bootstrap';
import { 
    BsQuestionCircle
} from "react-icons/bs";
export default function ShowModal  (props) {
    const tilte = props.typeTitle == 1 ? "Thông báo" : "Xác nhận";
    const type = props.type == 2 ? "sao chép" : props.type == 3 ? "kích hoạt" : "xóa";
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="model-header-confirm">
          <Modal.Title id="contained-modal-title-vcenter title-confirm">
             <BsQuestionCircle/>
            <span className="title-confirm">{tilte}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Bạn có chắc chắn muốn {type} hành động này?</h6>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onOk}>Đồng ý</Button>
            <Button className="btn-danger" onClick={props.onCancel}>Hủy bỏ</Button>
        </Modal.Footer>
      </Modal>
    );
  }