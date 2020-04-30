import React, { Component } from 'react';
import Advice from './Advice';
import Header from './Header';
import './App.css';
import Search from './Search';
import { Route, Link } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			advice: '',
			searchedAdvice: [],
			queryTerm: 'love',
		};
	}

	updateAdvice = () => {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slip.advice });
			})
			.then(console.log(this.state.advice))
			.catch(console.error);
	};
	// RANDOM ADVICE FROM CATEGORY SOLUTION
	// this.state.array.slips[
	// Math.floor(Math.random() * this.state.array.slips.length)
	// ].advice

	showSearchedAdvice = () => {
		const url = `https://api.adviceslip.com/advice/search/${this.state.queryTerm}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ searchedAdvice: data });
			})
			.catch(console.error);
		console.log(this.state.searchedAdvice);
	};

	searchFormChange = (event) => {
		event.preventDefault();
		this.setState({ queryTerm: event.target.value });
	};

	searchFormSubmit = (event) => {
		event.preventDefault();
		const search = event.target.value;
		this.setState({ queryTerm: search });
		this.showSearchedAdvice();
		console.log(this.state.queryTerm);
	};

	componentWillMount() {
		this.updateAdvice();
	}

	render() {
		return (
			<>
				<Header />
				<div className='body'>
					<div className='advice'>
						<Advice
							advice={this.state.advice}
							updateAdvice={this.updateAdvice}
						/>
					</div>
					{/* <Route path='/' component={App}/> */}
					<div className='search'>
						<button onClick={this.showSearchedAdvice}>BUTTON</button>
						{/* <Search
				  		searchFormSubmit={this.searchFormSubmit}
				  		searchString={this.state.queryTerm}
			  			searchFormChange={this.searchFormChange}
			  			showSearchedAdvice={this.showSearchedAdvice}
			    		/> */}
					</div>
				</div>
			</>
		);
	}
}
export default App;
