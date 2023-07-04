
import ReactModal from 'react-modal';
import "./Modal.css";

const Modal = ({isOpen, setModalOpen, children}) => {
    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={setModalOpen}
        overlayClassName="modal-overlay"
        className="modal-content"
        shouldCloseOnOverlayClick={true}>
          {children}
        </ReactModal>
    );

}

export default Modal;