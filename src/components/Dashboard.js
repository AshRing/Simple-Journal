import React from 'react';
import EntryList from './EntryList';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="notebook dashboard">
                <EntryList />
            </div>
        )
    }
}

export default Dashboard;