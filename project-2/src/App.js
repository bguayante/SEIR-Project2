import React, { Component } from 'react';
import Advice from './Advice';
import Header from './Header';
import './App.css';
import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			advice: 'Click to get advice!',
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
			console.log(this.state.advice)
	};

	showSearchedAdvice = () => {
		const url = `https://api.adviceslip.com/advice/search/${this.state.queryTerm}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ advice: data.slip.advice });
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
    const search = event.target.value
	this.setState({ queryTerm: search });
	this.showSearchedAdvice()
	console.log(this.state.queryTerm);
	};

	render() {
		return (
			<>
				<Header />
				<body>
          <div className='advice'>
					  <Advice advice={this.state.advice} updateAdvice={this.updateAdvice} />
          </div>
          <div className='search'>
				  	<Search
				  		searchFormSubmit={this.searchFormSubmit}
				  		searchString={this.state.queryTerm}
			  			searchFormChange={this.searchFormChange}
			  			showSearchedAdvice={this.showSearchedAdvice}
			    		/>
          </div>
          <div>
            <p>{this.state.queryTerm}</p>
          </div>
				</body>
			</>
		);
	}
}

export default App;
