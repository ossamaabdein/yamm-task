import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { Order } from "../orders/interfaces";

const SelectDropdown = ({
	index,
	action,
	options,
    placeholder,
	row,
	keyToChange
}: {
	index: number;
	action?: (key: string, updatedValue: any, row: Order) => void;
	options?: { label: string; value: string | number }[];
    placeholder?: string
	row?: any
	keyToChange: string
}) => {
	const [decision, setDecision] = useState(row?.decision || "");

	const handleChange = (event: SelectChangeEvent) => {
		setDecision(event.target.value as string);
		action && action(keyToChange, event.target.value as string, row);
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
