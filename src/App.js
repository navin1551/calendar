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
					</div>
					{this.state.opened && (
						<Calendar onChange={this.handleDateChange} value={this.state.date} className="react-calendar" />
					)}
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
