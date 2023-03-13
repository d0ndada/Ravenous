import React from "react";
import { useState } from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'review',
    'Most Reviewed': 'review_count'
}

export const SearchBar = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption)
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const getSortByClass = (sortByOption) => {
        return sortBy ===  sortByOption ? 'active' : '';
    }

    const sortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionsValue = sortByOptions[sortByOption];
            return <li 
            className={getSortByClass} 
            key={sortByOptionsValue}
            onClick={() => handleSortByChange(sortByOptionsValue)}
            >{sortByOption}</li>
        })
    };

    return (
        <div class="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {sortByOptions}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={handleTermChange} />
                <input placeholder="Where?" onChange={handleLocationChange} />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar;