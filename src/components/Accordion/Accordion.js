import React, { Component } from 'react';

import css from './Accordion.css';

export default class Accordion extends Component {

	constructor(props) {

		super(props);

		this.state = { opened: false };
	}



	toggle = () => {

		const { opened } = this.state;

		this.setState({opened: !opened})

	}

	render() {

		const {
			toggle,
			props,
			state: { opened }
		} = this;

		const content = opened ? (
			<div className={css.content}>
				{ this.props.children }
			</div>
		) : null;

		return (

			<div className={css.wrapper}>

				<div onClick={toggle} className={css.header}>
					{this.props.title}
				</div>
				{ content }

			</div>

		)

	}

}

