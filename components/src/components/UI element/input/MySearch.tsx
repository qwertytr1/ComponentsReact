import React, { ChangeEvent } from 'react';
import classes from './search.module.css';
import ISearchProps from './intForExport';

class MySearch extends React.Component<object, ISearchProps> {
    constructor(props: ISearchProps) {
        super(props);
    }

    handleChange(e: ChangeEvent) {
        const searchInput = e.target as HTMLInputElement;
        this.setState({ value: searchInput.value });
    }
    componentWillUnmount() {
        if (!this.state) return;

        const value = this.state.value;
        if (value) localStorage.setItem('searchInput', value);
    }

    componentDidMount() {
        const value = localStorage.getItem('searchInput');

        if (!value) return;

        if (value) this.setState({ value: value });
    }

    render() {
        return (
            <div className="search">
                <input
                    className={classes.search}
                    {...this.props}
                    onChange={(e) => {
                        this.handleChange(e);
                    }}
                    value={this.state ? this.state.value : ''}
                />
            </div>
        );
    }
}

export default MySearch;