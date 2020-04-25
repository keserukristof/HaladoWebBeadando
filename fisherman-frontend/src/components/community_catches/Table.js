import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from "@material-ui/core";


const row = (currentValue, index, header) =>
  <TableRow key={index}>
    {header.map((actualHeader, key) =>
      <TableCell key={key}>
        {currentValue[actualHeader.prop]}
      </TableCell>
    )}
  </TableRow>;

export default ({ data, header }) =>
  <Table>
    <TableHead>
      <TableRow>
        {header.map((currentValue, index) =>
          <TableCell key={index}>
            {currentValue.name}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((currentValue, index) => row(currentValue, index, header))}
    </TableBody>
  </Table>;
