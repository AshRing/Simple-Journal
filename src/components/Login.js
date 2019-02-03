import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {

    componentDidMount() {
        return document.querySelector('.front').style.paddingTop = '8rem';
    }

    componentWillUnmount() {
        return document.querySelector('.front').style.paddingTop = 0;
    }

    render() {
        return (
            <div className="front__badge">
                <h1 className="front__title">Composition Book</h1>
                <p>This is the Login page. This is a placeholder for Login functionality.</p>
                <Link to="/yournotebook/" className="front__openlink" onClick={handleClick}>Click to Open</Link>
            </div>
        );
    }
}

const handleClick = (e) => {
    document.querySelector('.front').style.padding = 0;
}

export default Login;