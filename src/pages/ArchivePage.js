import React from "react";
import EmptyNotes from "../components/EmptyNotes";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../context/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";

export default function ArchivePage() {
    const { locale } = React.useContext(LocaleContext);
    const [keyword, setKeyword] = React.useState("");
    const [notes, setNotes] = React.useState(null);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    // const filteredNotes = notes.filter((note) => {
    //     return note.title.toLowerCase().includes(keyword.toLowerCase());
    // });

    // let page;
    // if (notes.length !== 0) {
    //     page = <NotesList notes={filteredNotes} />;
    // } else {
    //     page = <EmptyNotes />;
    // }
    console.log("NOTES = ", notes);
    return (
        <section className="archives-page">
            <h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
            <SearchBar keyword={keyword} keywordChange={handleChange} />
            {notes !== null && notes.length === 0 && <EmptyNotes />}
            {notes !== null && notes.length !== 0 && (
                <NotesList
                    notes={notes.filter((note) => {
                        return note.title
                            .toLowerCase()
                            .includes(keyword.toLowerCase());
                    })}
                />
            )}
        </section>
    );
}
