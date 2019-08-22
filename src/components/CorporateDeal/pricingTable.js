import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const PricingTable = props => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          Party size
          <br />
          (People)
        </TableCell>
        <TableCell align="center">
          Gift card value
          <br />
          MO -WE
        </TableCell>
        <TableCell align="center">
          Gift card value
          <br />
          TH - SU
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow key="UNIQUE_ID">
        <TableCell component="th" scope="row">
          Up to 30
        </TableCell>
        <TableCell align="center">€ 30.00</TableCell>
        <TableCell align="center">€ 20.00</TableCell>
      </TableRow>
      <TableRow key="UNIQUE_ID2">
        <TableCell component="th" scope="row">
          31 - 50
        </TableCell>
        <TableCell align="center">€ 55.00</TableCell>
        <TableCell align="center">€ 45.00</TableCell>
      </TableRow>
      <TableRow key="UNIQUE_ID3">
        <TableCell component="th" scope="row">
          51 - 100
        </TableCell>
        <TableCell align="center">€ 95.00</TableCell>
        <TableCell align="center">€ 80.00</TableCell>
      </TableRow>
      <TableRow key="UNIQUE_ID4">
        <TableCell component="th" scope="row">
          101 - 200
        </TableCell>
        <TableCell align="center">€ 175.00</TableCell>
        <TableCell align="center">€ 160.00</TableCell>
      </TableRow>
      <TableRow key="UNIQUE_ID5">
        <TableCell component="th" scope="row">
          201+
        </TableCell>
        <TableCell align="center">€ 300.00</TableCell>
        <TableCell align="center">€ 270.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
