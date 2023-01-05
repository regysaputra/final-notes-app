import React from "react";
import LocaleContext from "../context/LocaleContext";

export default function EmptyNotes() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <section className="notes-list-empty">
            <p className="notes-list__empty">
                {locale === "id" ? "Tidak ada catatan" : "Records not found"}.
            </p>
        </section>
    );
}
