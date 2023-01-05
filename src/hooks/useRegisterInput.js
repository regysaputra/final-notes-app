import React from "react";

export default function useRegisterInput(defaultValue) {
	const [value, setValue] = React.useState(defaultValue);

	const handleValueChange = (event) => setValue(event.target.value);

    return [value, handleValueChange];
}
