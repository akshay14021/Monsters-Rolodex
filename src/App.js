import React, { Component } from 'react'
import './App.css'

import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	async componentDidMount() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		)
		const data = await response.json()
		this.setState({
			monsters: data
		})
	}

	handleInputField = e => {
		this.setState({
			searchField: e.target.value
		})
	}

	render() {
		const filteredMonster = this.state.monsters.filter(monster => {
			return monster.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase())
		})
		return (
			<div className='App'>
				<h1>{this.props.title}</h1>
				<SearchBox handleInputField={this.handleInputField} />
				<CardList monsters={filteredMonster} />
			</div>
		)
	}
}

export default App
