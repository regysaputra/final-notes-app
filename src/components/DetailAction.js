import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";
import { archiveNote, deleteNote, unarchiveNote } from "../utils/network-data";

export default function DetailAction({ id, archived }) {
    const navigate = useNavigate();

    const changeStatus = () => {
        if (archived === false) {
            archiveNote(id).then(() => {
                navigate("/");
            })
        } else {
            unarchiveNote(id).then(() => {
                navigate("/");
            })
        }
    };

    const noteDelete = () => {
        deleteNote(id).then(() => {
            navigate("/");
        })
    };

    return (
        <div className="detail-page__action">
            {archived === false && <ArchiveButton onClick={changeStatus} />}
            {archived === true && <ActiveButton onClick={changeStatus} />}
            <DeleteButton onClick={noteDelete} />
        </div>
    );
}

DetailAction.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
};
