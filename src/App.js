import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './App.css';

export default class App extends Component {
	state = {
		opened: false,
		date: null
	};

	handleDateChange = (date) => {
		this.setState({
			date,
			opened: false
		});
	};

	toggleCalendar = () => {
		this.setState({
			opened: !this.state.opened
		});
	};

	render() {
		return (
			<div>
				<form className="date-form">
					<label>Choose Date</label>
					<div>
						<input id="input-field" value={this.state.date} onClick={this.toggleCalendar} />
						<button>Submit</button>
					</div>
					{this.state.opened && (
						<Calendar className="react-calendar" onChange={this.handleDateChange} value={this.state.date} />
					)}
				</form>
			</div>
		);
	}
}
