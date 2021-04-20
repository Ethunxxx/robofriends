import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { setSearchField, requestRobots } from '../actions.js'





const App = () => {

    const dispatch = useDispatch()
    const { searchField } = useSelector(state => state.searchRobots)
    const { robots, isPending, error } = useSelector(state => state.requestRobots)
    const [date,] = useState(Date())



    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    useEffect(() => {
        onRequestRobots()
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (isPending) {
        return (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <h1 className='f3'>Loading...</h1>
            </div>
        )
    }
    else if (!error) {
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList
                            robots={filteredRobots}
                            date={date} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
    else {
        return (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <h1 className='f3'>Error...</h1>
            </div>
        )
    }
}




export default App;