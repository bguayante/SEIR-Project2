import React, { Component } from 'react';
import Advice from './components/Advice';
import './App.css';
import Search from './components/Search';
import Footer from './components/Footer';
import Header from './components/Header';
import Time from 'react-time'

////////////////////////////////
//Declare and initialize state//
////////////////////////////////

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			advice: 'Choose a Category Below',
			query: '',
		};
	}

	///////////////////////////////////
	//Return advice on category click//
	///////////////////////////////////

	valueHandler = (event) => {
		this.setState({ query: event.target.value }, this.showSearchedAdvice);
	};

	showSearchedAdvice = () => {
		const url = `https://api.adviceslip.com/advice${this.state.query}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ array: data }, () => {
					this.setState({
						advice: this.state.array.slips[
							Math.floor(Math.random() * this.state.array.slips.length)
						].advice,
					});
				});
			});
	};

	////////////////////////////////////
	//When random category is selected//
	////////////////////////////////////

	updateAdvice = () => {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slip.advice });
			})
			.catch(console.error);
	};

	///////////////
	//Page render//
	///////////////

	render() {
		const now= <Time value={now} titleFormat='HH:mm' relative />
		console.log(now)git 

		return (
			<div className='body'>
				<div className='header'>
					<Header />
				</div>
				<div className='time'>
					<div>Date()</div>
				</div>
				<div className='advice'>
					<Advice advice={this.state.advice} updateAdvice={this.updateAdvice} />
				</div>
				<div className='search'>
					<Search
						valueHandler={this.valueHandler}
						updateAdvice={this.updateAdvice}
					/>
				</div>
				<div>
					<Footer />
				</div>
			</Time>
		);
	}
}

export default App;
