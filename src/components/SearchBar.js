import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

export default function SearchBar({ keyword, keywordChange }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <section className="search-bar">
            <input
                type="text"
                name="search"
                id="search"
                placeholder={
                    locale === "id"
                        ? "Cari berdasarkan judul ..."
                        : "Find based on title ..."
                }
                value={keyword}
                onChange={(event) => keywordChange(event)}
            />
        </section>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};
