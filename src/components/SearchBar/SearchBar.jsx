import React from "react"


const sortByOptions = {
    'Best Match':'best_match',
    'Highest Rated': 'review' ,
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionsValue = sortByOptions[sortByOption];
            return <li key={sortByOptionsValue} >{sortByOption}</li>
        });
    }
    render(){
        <div class="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions}
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
    }
}