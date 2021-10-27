function Modal (props) {
    return (
        <div className="modal-bg" onClick={props.cancel}>
            <div className="modal">
                <p>Are you sure you want to delete it?</p>
                <button className="btn" onClick={props.confirm}>Yes</button>
                <button className="btn btn--alt" onClick={props.cancel}>No</button>
            </div>
        </div>
    );
}

export default Modal;