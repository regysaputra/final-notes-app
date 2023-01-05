import React from "react";
import LocaleContext from "../context/LocaleContext";

export default function NotFoundPage() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <section>
            <h2>404</h2>
            <p>{locale === "id" ? "Halaman tidak ditemukan" : "Page not found"}</p>
        </section>
    );
}
