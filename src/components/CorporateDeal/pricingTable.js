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
				<TableCell align="right">€ 20.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID2">
				<TableCell component="th" scope="row">
					31 - 50
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 45.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID3">
				<TableCell component="th" scope="row">
					51 - 100
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 80.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID4">
				<TableCell component="th" scope="row">
					101 - 200
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 160.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID5">
				<TableCell component="th" scope="row">
					201+
				</TableCell>
				<TableCell align="right">TH - SU</TableCell>
				<TableCell align="right">€ 270.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID6">
				<TableCell component="th" scope="row">
					Up to 30
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 30.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID7">
				<TableCell component="th" scope="row">
					31 - 50
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 55.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID8">
				<TableCell component="th" scope="row">
					51 - 100
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 95.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID9">
				<TableCell component="th" scope="row">
					101 - 200
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 175.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID10">
				<TableCell component="th" scope="row">
					201+
				</TableCell>
				<TableCell align="right">MO - WE</TableCell>
				<TableCell align="right">€ 300.00</TableCell>
			</TableRow>
		</TableBody>
	</Table>
)
