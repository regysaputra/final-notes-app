import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import PropTypes from "prop-types";

export default function DeleteButton({ onClick }) {
    return (
        <button
            className="action"
            type="button"
            title="Hapus"
            onClick={onClick}
        >
            <MdDeleteOutline />
        </button>
    );
}

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
