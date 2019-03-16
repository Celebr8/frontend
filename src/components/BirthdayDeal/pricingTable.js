import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export const PricingTable = (props) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableCell>Party size<br/>(People)</TableCell>
				<TableCell align="right">Party day</TableCell>
				<TableCell align="right">Gift card value</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow key="UNIQUE_ID">
				<TableCell component="th" scope="row">
					Up to 30
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 15.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID2">
				<TableCell component="th" scope="row">
					31 - 50
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 35.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID3">
				<TableCell component="th" scope="row">
					51 - 100
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 60.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID4">
				<TableCell component="th" scope="row">
					101 - 200
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 115.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID5">
				<TableCell component="th" scope="row">
					201+
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 200.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID6">
				<TableCell component="th" scope="row">
					Up to 30
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 25.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID7">
				<TableCell component="th" scope="row">
					31 - 50
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 45.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID8">
				<TableCell component="th" scope="row">
					51 - 100
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 75.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID9">
				<TableCell component="th" scope="row">
					101 - 200
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 130.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID10">
				<TableCell component="th" scope="row">
					201+
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 230.00</TableCell>
			</TableRow>
		</TableBody>
	</Table>
)
