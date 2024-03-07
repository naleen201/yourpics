import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Modal = ({ headingText, isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<>
            <div style={{
                zIndex: "1000",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div style={{
                    position: "relative",
                    padding: 10,
                    background: "#fff",
                    borderRadius: 5,
                    width: "50%",
                    maxHeight: "60%",
                    
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                        <p style={{fontSize: "20px",fontWeight: "bold",margin:"2px 5px"}}>{headingText}</p>
                        <div onClick={onClose} style={{margin:"2px 5px"}}><FontAwesomeIcon icon={faXmark} size="lg" pulse /></div>
                    </div>
                        {children}
                </div>
            </div>
            
        </>
	);
};

export default Modal;
