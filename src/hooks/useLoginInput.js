import React from "react";

export default function useLoginInput(defaultValue) {
	const [value, setValue] = React.useState(defaultValue);

	const handleValueChange = (event) => {
		setValue(event.target.value);
	}

    return [value, handleValueChange];
}
