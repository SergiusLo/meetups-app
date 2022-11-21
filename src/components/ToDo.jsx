import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ToDo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function modalChangerStatusHandler() {
    setmodalIsOpen(true);
  }
  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.article}</h2>
      <div className="action">
        <button className="btn" onClick={modalChangerStatusHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal
          confirmDelete={closeModalHandler}
          rejectDelete={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default ToDo;
