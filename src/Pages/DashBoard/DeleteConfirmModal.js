import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const DeleteConfirmModal = ({ deleteConfirmModal, refetch, setDeleteConfirmModal }) => {
  const { email, name, specialty, _id } = deleteConfirmModal;
  const handleDelete = async (id) => {
    const { data } = await axios.delete(
      `https://whispering-dusk-64489.herokuapp.com/doctor/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (data.acknowledged) {
      toast.success(`Doctor ${name} is deleted`);
      setDeleteConfirmModal(null);
      refetch();
    }
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">are you sure want to delete {name}!</h3>

          <div class="modal-action">
            <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">
              DELETE
            </button>
            <label for="delete-confirm-modal" class="btn btn-sm">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
