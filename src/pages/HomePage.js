import React, { useEffect } from "react";
import EmptyNotes from "../components/EmptyNotes";
import HomeAction from "../components/HomeAction";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../context/LocaleContext";
import { getActiveNotes } from "../utils/network-data";

export default function HomePage() {
    const { locale } = React.useContext(LocaleContext);
    const [keyword, setKeyword] = React.useState("");
    const [notes, setNotes] = React.useState(null);

    useEffect(() => {
        getActiveNotes().then(({ data }) => {
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
        <section className="homepage">
            <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
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
            <HomeAction />
        </section>
    );
}
