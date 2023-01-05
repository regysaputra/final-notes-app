import React from "react";
import { FiPlus } from "react-icons/fi";
import PropTypes from "prop-types";

export default function AddButton({ onClick }) {
    return (
        <button
            className="action"
            type="button"
            title="Tambah"
            onClick={onClick}
        >
            <FiPlus />
        </button>
    );
}

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
