import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
            date: Date(),
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => this.setState({ robots: users }));
    }


    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            
        })

        if(!this.state.robots.length){
            return (
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h1 className='f3'>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList 
                                robots={filteredRobots}
                                date={this.state.date}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

        
    }
    
}


export default App;