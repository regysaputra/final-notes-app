import React, { useState } from "react";
import InputAction from "./InputAction";

export default function NotesInput() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const onTitleInputHandler = (event) => {
		setTitle(event.target.value);
	}

	const onBodyInputHandler = (event) => {
		setBody(event.target.innerHTML);
	}

    return (
        <>
            <div className="add-new-page__input">
                <input
                    className="add-new-page__input__title"
                    placeholder="Title..."
                    value={title}
                    onChange={onTitleInputHandler}
                />
                <div
                    className="add-new-page__input__body"
                    contentEditable="true"
                    data-placeholder="Your note..."
                    onInput={onBodyInputHandler}
                ></div>
            </div>
            <InputAction title={title} body={body} />
        </>
    );
}
