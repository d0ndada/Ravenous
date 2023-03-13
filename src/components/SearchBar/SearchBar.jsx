import React from "react"


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'review',
    'Most Reviewed': 'review_count'
}

export const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionsValue = sortByOptions[sortByOption];
            return <li key={sortByOptionsValue} >{sortByOption}</li>
        })
    };

    return (
        <div class="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar;