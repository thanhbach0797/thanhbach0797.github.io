import {Modal} from 'react-bootstrap';
import { 
    BsXCircle
} from "react-icons/bs";
export default function ShowLoadding  (props) {
    const style1 = {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        opacity: '0.2',
    }
    const style2 = {
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'transparent',
      zIndex: '1004',
      alignItems: 'center',
      justifyContent: 'center',
  }
    const show = props.show;
    return (
        <div>
            {show ?
                <div>
                <div style={style1}></div>
                    <div className="text-center" style={style2}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">
                            
                        </span>
                    </div>
                </div>
                </div>
          :
          null
          }
        </div>
        
    );
  }