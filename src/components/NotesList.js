import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

export default function NotesList({ notes }) {
    return (
        <section className="notes-list">
            {notes.map((note) => (
                <NotesItem key={note.id} id={note.id} {...note} />
            ))}
        </section>
    );
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
