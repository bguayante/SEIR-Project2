import React, { Component } from 'react';
import Advice from './Advice';
import Header from './Header';
import './App.css';
import Search from './Search';
import { Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			advice: '',
			queryTerm: '',
		};
	}

	updateAdvice = () => {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slip.advice });
			})
			.catch(console.error);
		console.log(this.state.advice);
	};

	showSearchedAdvice = () => {
		const url = `https://api.adviceslip.com/advice/search/${this.state.queryTerm}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slips[0].advice });
			})
			.catch(console.error);
		console.log(this.data);
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
				<Route path='/' component={App}/>
					<div className='search'>
				  	<Search
				  		searchFormSubmit={this.searchFormSubmit}
				  		searchString={this.state.queryTerm}
			  			searchFormChange={this.searchFormChange}
			  			showSearchedAdvice={this.showSearchedAdvice}
			    		/>
         			 </div>
				</div>
			</>
		);
	}

}
export default App;
