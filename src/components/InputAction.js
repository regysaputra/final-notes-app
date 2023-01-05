import React from "react";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { addNote } from "../utils/network-data";

export default function InputAction(props) {
    const navigate = useNavigate();

    const saveNote = () => {
        addNote({title: props.title, body: props.body});
        navigate("/");
    };

    return (
        <div className="add-new-page__action">
            <button
                className="action"
                type="button"
                title="Simpan"
                onClick={saveNote}
            >
                <MdDone />
            </button>
        </div>
    );
}

InputAction.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
