import React, { Component } from 'react';
import Products from './components/products/products';
import Basket from './components/basket/basket';
import Check from './components/check/check';
import About from './components/About/about';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Product from './components/product/product';

class App extends Component {
	
	constructor(){
		super()
		this.state = {
			panier : [
				{
					id: "114f5000sd078",
					path: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
					name: "Bananes de France",
					price: 1.05,
					unity: "Kg(s)",
					quantity: 6,
				},
				{
					id: "114f500dfCCf",
					path: "https://images.unsplash.com/photo-1588444872849-1c9a5ade50ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
					name: "Oranges d'Espagne",
					price: 0.8,
					unity: "Kg(s)",
					quantity: 5
				},
				{
					id: "114f55g40000000",
					path: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
					name: "Bananes d'Espagne",
					price: 1.7,
					unity: "Kg",
					quantity: 9
				},
			],
			categories : [
				{
					id: "oranges",
					category_name: "oranges",
					isActive: false,
					liste: [
						{
							id: "114f55g4g78",
							path: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
							name: "Oranges d'Espagne",
							price: 1.2,
							unity: "Kg"
						},
						{
							id: "114f500dfCCf",
							path: "https://images.unsplash.com/photo-1588444872849-1c9a5ade50ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
							name: "Oranges d'Espagne",
							price: 0.8,
							unity: "Kg"
						},
					]
				},
				{
					id: "pommes",
					category_name: "pommes",
					isActive: false,
					liste: [
						{
							id: "114qs0d0qsLLg4g78",
							path: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
							name: "Pommes d'Espagne",
							price: 1.45,
							unity: "Kg"
						}
					]
				},
				{
					id: "bananes",
					isActive: true,
					category_name: "bananes",
					liste: [
						{
							id: "114f55g40000000",
							path: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
							name: "Bananes d'Espagne",
							price: 1.7,
							unity: "Kg"
						},
						{
							id: "114f5000sd078",
							path: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
							name: "Bananes de France",
							price: 1.05,
							unity: "Kg"
						},
						{
							id: "dflsdfkFFFg4500",
							path: "https://images.unsplash.com/photo-1589468619550-3c6350b50ce0?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
							name: "Bananes de Brésile",
							price: 2.8,
							unity: "Kg"
						}
					]
				}
			],
			filtred : []
		}
	}

	render() {
		return (
			<Router>
				<div className="gr-body">
						<Navbar />
						<Sidebar />
						<div className="gr-content">
							<Switch>
								<Route exact path="/" component={Products} />
								<Route path="/products" component={Products} />
								<Route path="/basket" component={Basket} />
								<Route path="/check" component={Check} />
								<Route path="/about" component={About} />
							</Switch>
						</div>
					</div>
			</Router>
		);
	}
}
 
export default App;
