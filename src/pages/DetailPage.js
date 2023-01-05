import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailAction from "../components/DetailAction";
import NotesDetail from "../components/NotesDetail";
import { getNote } from "../utils/network-data";

export default function DetailPage() {
	const { id } = useParams();

	const [note, setNote] = useState(null);

	useEffect(() => {
		console.log("ID = ", id);
		getNote(id).then(({ data }) => {
			setNote(data);
		})
	}, []);

    return (
        <section className="detail-page">
            {note !== null && (
                <>
                    <NotesDetail {...note} />
                    <DetailAction {...note} />
                </>
            )}
        </section>
    );
}
