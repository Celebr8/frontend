import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export const pricingTable = (props) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableCell>Party size</TableCell>
				<TableCell>Party day</TableCell>
				<TableCell>Amazon gift card value</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow key="UNIQUE_ID">
				<TableCell component="th" scope="row">
					10-20 people
				</TableCell>
				<TableCell align="right">Saturday</TableCell>
				<TableCell align="right">20 EUR</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID2">
				<TableCell component="th" scope="row">
					20-30 people
				</TableCell>
				<TableCell align="right">Saturday</TableCell>
				<TableCell align="right">30 EUR</TableCell>
			</TableRow>
		</TableBody>
	</Table>


)
