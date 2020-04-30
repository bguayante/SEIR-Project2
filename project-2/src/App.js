import React, { Component } from 'react';
import Advice from './Advice';
import Header from './Header';
import './App.css';
import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			advice: '',
			query: '',
		};
	}

	//click button
	//retrieve searched advice
	//display random advice from searched advice

	// RANDOM ADVICE FROM CATEGORY SOLUTION
	// this.state.array.slips[
	// Math.floor(Math.random() * this.state.array.slips.length)
	// ].advice

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

	updateAdvice = () => {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slip.advice });
			})
			.catch(console.error);
	};

	componentDidMount() {
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
				</div>
				<div className='search'>
					<Search
						valueHandler={this.valueHandler}
						updateAdvice={this.updateAdvice}
					/>
				</div>
			</>
		);
	}
}
export default App;
