import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Footer from './components/Footer'
import TopNav from "./components/TopNav";
import EventsApp from "./components/Events/EventsApp";
import EventsDetails from "./components/Events/EventsDetails";
import Sponsors from "./components/Sponsors"
import TeamPage from "./components/TeamPage"
import ContactUs from "./components/ContactUs";
import './animate.css';

class Main extends React.Component{

    constructor(props)
    {
      super(props);
      this.state = {
        isLoading:true
      }
	}
	componentDidMount()
	{
		setTimeout(()=>{
			this.setState({
				isLoading:false
			})
		},3000)
	
	}
    render(){
		if(this.state.isLoading)
		{
			return(
			<div>
				<div class="container">
					<svg id="logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="828.000000pt" height="804.000000pt" viewBox="0 0 828.000000 804.000000" preserveAspectRatio="xMidYMid meet">
			<metadata>
			Created by potrace 1.16, written by Peter Selinger 2001-2019
			</metadata>
			<g transform="translate(0.000000,804.000000) scale(0.100000,-0.100000)"
			>
			<path d="M2878 6860 c-105 -18 -203 -97 -242 -196 -18 -43 -20 -81 -24 -299
			-4 -270 2 -329 44 -402 40 -69 117 -128 198 -153 39 -12 87 -28 106 -35 77
			-28 111 -36 216 -50 60 -8 132 -19 159 -25 28 -6 88 -18 135 -26 46 -8 87 -19
			91 -25 3 -5 10 -9 15 -7 12 3 103 -23 134 -39 14 -7 31 -13 38 -13 8 0 26 -6
			40 -14 15 -8 67 -33 116 -57 261 -124 583 -377 740 -582 101 -132 90 46 96
			-1612 l5 -1460 33 -67 c35 -71 76 -112 145 -146 95 -47 100 -47 557 -47 428 0
			436 0 502 23 37 13 85 37 108 53 48 35 90 53 90 39 0 -15 28 -12 37 3 4 8 16
			16 26 20 9 3 17 15 17 25 0 11 8 37 17 58 15 36 16 123 13 1069 -5 1784 -5
			1801 -23 1885 -34 161 -47 207 -71 260 -14 30 -26 61 -26 68 0 6 -4 12 -10 12
			-5 0 -10 6 -10 14 0 8 -4 16 -8 18 -4 2 -34 50 -67 108 -52 94 -91 156 -105
			170 -3 3 -22 31 -43 62 -21 31 -46 66 -55 76 -9 11 -48 56 -85 100 -309 363
			-954 748 -1612 962 -220 72 -560 158 -690 175 -27 4 -66 11 -85 15 -41 10
			-291 37 -400 43 -41 2 -96 1 -122 -3z"/>
			<path d="M3305 4304 c-453 -53 -852 -221 -1270 -535 -141 -106 -189 -155 -216
			-224 l-24 -60 -3 -867 c-2 -730 0 -873 12 -901 22 -54 71 -85 151 -96 39 -5
			97 -20 130 -35 l60 -26 916 0 c1036 0 993 -3 1045 72 29 42 29 50 -5 143 -6
			17 -13 47 -16 67 -6 39 -42 90 -79 111 -16 9 -185 13 -676 17 -527 4 -660 8
			-682 19 -22 11 -27 22 -32 70 -18 175 -23 914 -7 1005 6 33 29 98 53 145 79
			161 253 305 509 421 84 38 115 49 183 65 11 2 40 11 65 19 45 14 123 28 225
			41 132 17 216 95 216 199 0 50 -27 127 -49 140 -5 4 -15 34 -22 67 -7 37 -22
			73 -38 91 -43 51 -73 58 -253 57 -90 -1 -176 -4 -193 -5z"/>
			<path d="M3515 3309 c-90 -12 -182 -41 -270 -87 -98 -51 -233 -185 -274 -272
			l-31 -65 0 -261 c0 -255 1 -262 23 -295 41 -60 115 -63 153 -4 14 22 17 62 18
			304 l2 278 42 50 c66 80 115 119 194 156 146 70 292 71 451 3 50 -22 163 -99
			210 -144 69 -67 70 -69 76 -359 6 -244 7 -263 27 -289 34 -46 104 -54 137 -16
			28 32 37 121 37 350 l0 227 -27 55 c-37 72 -159 194 -254 253 -94 58 -173 90
			-277 111 -86 17 -129 18 -237 5z"/>
			<path d="M3582 2817 c-42 -19 -48 -56 -42 -280 l5 -209 28 -24 c36 -31 77 -31
			107 1 29 31 35 108 23 323 -9 146 -10 155 -33 172 -31 23 -60 29 -88 17z"/>
			</g>
			</svg>
				</div>
			</div>
			)}
		else{
			return(

			<BrowserRouter>
			<div>
				<TopNav />
				<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/events" exact component={EventsApp} />
				<Route path="/events/:id" component={EventsDetails} />
				<Route path="/sponsors" component={Sponsors}/>
				<Route path="/TeamPage" component={TeamPage}/>
				<Route path="/ContactUS" component={ContactUs} />
				{/* <Route path="/events/:id" render={() => <div>404</div>}/> */}
				</Switch>
				
				<Footer />

			</div>
			</BrowserRouter>
			)
		}
    }
}
export default Main;
