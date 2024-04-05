import { useState } from "react";
import Modal from "../../../components/Shared/Modal";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  function handleShowModal(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <div className="py-2 bg-gray-200 min-h-screen flex items-center justify-center">
      <button className="p-2 bg-gray-500 " onClick={handleShowModal}>
        Open Modal
      </button>
      <Modal open={showModal}>
        <h2>test</h2>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Test;
