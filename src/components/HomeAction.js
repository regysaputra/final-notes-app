import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";

export default function HomeAction() {
    const navigate = useNavigate();

    const addNavigation = () => {
        navigate("/add");
    };

    return (
        <div className="homepage__action">
            <AddButton onClick={addNavigation} />
        </div>
    );
}
