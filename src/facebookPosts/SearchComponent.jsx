import React, {Component} from 'react';
import ArrayUtils from '../utils/ArrayUtils';

const RenderPostItems = (props) => {
    const data = props.data;
    return (
        <ul>
            {data && data.map(item => (
                <li>
                    {item}
                </li>
            ))}
        </ul>
    );
};

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            filteredData: props.data
        }
    }

    handleInputChange = event => {
        const searchValue = event.target.value;
        this.setState({
            filteredData: ArrayUtils.caseInsensitiveFilterArray(this.state.data, searchValue),
            data: this.state.data
        });
    };

    render() {
        const data = this.state.filteredData;
        return (
            <div className="searchForm">
                <form>
                    <input
                        placeholder="Search for..."
                        onChange={this.handleInputChange}
                    />
                </form>
                <div id="postItems">
                    <RenderPostItems data={data}/>
                </div>
            </div>
        );
    }
}

export default SearchComponent;