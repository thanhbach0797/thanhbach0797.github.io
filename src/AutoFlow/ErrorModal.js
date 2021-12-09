import {Modal} from 'react-bootstrap';
import { 
    BsXCircle
} from "react-icons/bs";
export default function ShowModal  (props) {
    const message = props.data;
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
             <BsXCircle className="icon-error"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-success">
          <p>{message}</p>
        </Modal.Body>
      </Modal> 
    );
  }