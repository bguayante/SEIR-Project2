import React, { Component } from 'react';
import './App.css';
import Advice from './components/Advice';
import Search from './components/Search';
import Footer from './components/Footer';
import Header from './components/Header';
import Time from './components/Time';

////////////////////////////////
//Declare and initialize state//
////////////////////////////////

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			advice: 'Choose a Category Below To Get Advice',
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
		return (
			<div className='body'>
				<div className='header'>
					<Header />
				</div>
				<div className='spacer'></div>
				<div className='time'>
					<Time />
				</div>
				<div className='advice'>
					<Advice advice={this.state.advice} />
				</div>
				<div className='search'>
					<Search
						valueHandler={this.valueHandler}
						updateAdvice={this.updateAdvice}
					/>
				</div>
				<div className='footer'>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
