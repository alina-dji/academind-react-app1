import Modal from './Modal';
import { useState } from 'react';

function Todo (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal () {
        setModalIsOpen(true);
    }

    function closeModal () {
        setModalIsOpen(false);
    }

    return (
        <>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={openModal}>Delete</button>
                </div>
            </div>
            {modalIsOpen ? <Modal cancel={closeModal} confirm={closeModal} /> : null}
        </>
    );
}

export default Todo;