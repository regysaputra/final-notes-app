import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import PropTypes from "prop-types";

export default function ArchiveButton({ onClick }) {
    return (
        <button
            className="action"
            type="button"
            title="Arsipkan"
            onClick={onClick}
        >
            <BiArchiveIn />
        </button>
    );
}

ArchiveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
