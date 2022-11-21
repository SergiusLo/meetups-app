import React from "react";

function Modal(props) {
  function confirmDeleteHandler() {
    props.confirmDelete();
  }
  function rejectDeleteHandler() {
    props.rejectDelete();
  }
  return (
    <div className="modal">
      <h2>Вы уверены</h2>
      <button className="btn" onClick={confirmDeleteHandler}>
        ДА
      </button>
      <button className="btn" onClick={rejectDeleteHandler}>
        НЕТ
      </button>
    </div>
  );
}

export default Modal;
