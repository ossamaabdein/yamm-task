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
	keyToChange,
	label,
}: {
	index?: number;
	action?: (key: string, updatedValue: any, row: Order) => void;
	options?: { label: string; value: string | number }[];
	placeholder?: string;
	row?: any;
	keyToChange: string;
	label?: string;
}) => {
	const [selectedValue, setSelectedValue] = useState(row?.[keyToChange] || "");

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedValue(event.target.value as string);
		action && action(keyToChange, event.target.value as string, row);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id={`select-${index}`}>{placeholder}</InputLabel>
			<Select
				labelId={`select-${index}`}
				id={`select-${index}`}
				value={selectedValue}
				label={label}
				onChange={handleChange}
			>
				{options &&
					options?.map((option) => (
						<MenuItem value={option.value} key={option.value}>
							{option.label}
						</MenuItem>
					))}
			</Select>
		</FormControl>
	);
};

export default SelectDropdown;
