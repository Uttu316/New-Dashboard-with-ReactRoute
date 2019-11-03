import React from "react";
const Modal = ({ handleClose, show, children }) => {
    const showHideClassname = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassname}>
            <section className="modal-main">
                {children}
                <button className="modal-closebtn" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};
export default Modal;
