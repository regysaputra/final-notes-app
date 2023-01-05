import React from "react";
import { BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";

export default function ActiveButton({ onClick }) {
    return (
        <button
            className="action"
            type="button"
            title="Aktifkan"
            onClick={onClick}
        >
            <BiArchiveOut />
        </button>
    );
}

ActiveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
