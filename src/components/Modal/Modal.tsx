import React, {Dispatch, SetStateAction} from 'react';
import './Modal.scss'

interface ModalInterface{
    setIsModal:Dispatch<SetStateAction<boolean>>
}
//компонент модального окна
const Modal = (props:ModalInterface) => {
    const{setIsModal} = props
    return (
        <div className={'modal'}>
            <div className="modal_info">
            <div className="title">Cookie consent</div>
            <div className="subTitle">This website uses cookies.
                By continuing to browse, you are accepting its use. If you want to know more,
                see our <span>Privacy Policy.</span>
                </div>
        </div>
            <div className="modal_buttons">
                <button onClick={()=>setIsModal(false)}>Reject</button>
                <button onClick={()=>setIsModal(false)}>Accept</button>
            </div>
        </div>
    );
};

export default Modal;