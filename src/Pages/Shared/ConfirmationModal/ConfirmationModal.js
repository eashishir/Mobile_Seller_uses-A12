import React from 'react';

const ConfirmationModal = ({title , message, closeModal, successButtonName,  successAction , modalData}) => {
    return (
        <div>
         
           

          
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div>
                    <label onClick={() => successAction(modalData)} 
                    htmlFor="confirmation-modal" 
                    className="btn btn-xs m-1 btn-primary ">{successButtonName}</label>
                    <button onClick={closeModal} className='btn btn-xs btn-outline'>cancle</button>
                    </div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4 text-success">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;