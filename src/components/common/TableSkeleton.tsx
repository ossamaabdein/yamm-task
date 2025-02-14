import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Skeleton } from "@mui/material";

export const TableSkeleton = ({ rowsNum = 10, colsNum = 8} : {rowsNum?: number, colsNum?: number}) => {
  return (
    <TableBody>
      {[...Array(rowsNum)].map((row, index) => (
        <TableRow key={index}>
          {[...Array(colsNum)].map((col, index) => (
            <TableCell style={{ minWidth: "200px" }} key={index}>
              <Skeleton animation="wave" variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
};