import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const SelectDropdown = ({index, action}: {index: number, action?: () => void}) => {

    const [age, setAge] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
        action && action();
	};


	return (
		<FormControl fullWidth>
			<InputLabel id={`demo-simple-select-${index}`}>Age</InputLabel>
			<Select
				labelId={`demo-simple-select-${index}`}
				id={`demo-simple-select-${index}`}
				value={age}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectDropdown;
