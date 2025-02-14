import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";

const SelectDropdown = ({
	index,
	action,
	options,
    placeholder
}: {
	index: number;
	action?: () => void;
	options?: { label: string; value: string | number }[];
    placeholder?: string
}) => {
	const [decision, setDecision] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setDecision(event.target.value as string);
		action && action();
	};

	return (
		<FormControl fullWidth>
			<InputLabel id={`demo-simple-select-${index}`}>{placeholder}</InputLabel>
			<Select
				labelId={`demo-simple-select-${index}`}
				id={`demo-simple-select-${index}`}
				value={decision}
				label="Decision"
				onChange={handleChange}
			>
				{options &&
					options?.map((option) => (
						<MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
					))}
			</Select>
		</FormControl>
	);
};

export default SelectDropdown;
