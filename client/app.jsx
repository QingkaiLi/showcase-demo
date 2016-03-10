import "./styles/demo-shared/shared.css";
import "./styles/showcase.styl";

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link} from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory"

import {Icon} from "./kl/klreact-base/src";
import Home from "./pages/home";
import logo2016 from "./images/2016.png";

const Index = React.createClass({
    getInitialState() {
        return {
            navVisible: false
        };
    },
    _toggleNav() {
        this.setState({
            navVisible: !this.state.navVisible
        });
    },
    render() {
        return (
            <div className={this.state.navVisible ? "is-navigable" : ""}>
                <div className="guide-nav">
                    <ol className="nav-list">
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/">
                                <span className="guide-nav-item-reference"></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/style-guide">
                                <span className="guide-nav-item-reference"></span>
                                Style Guide
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/catalog">
                                <span className="guide-nav-item-reference"></span>
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/faq">
                                <span className="guide-nav-item-reference"></span>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/terms">
                                <span className="guide-nav-item-reference"></span>
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="guide-nav-link"
                                onClick={this._toggleNav}
                                to="/videos">
                                <span className="guide-nav-item-reference"></span>
                                Videos
                            </Link>
                        </li>
                        <hr/>

                    </ol>
                </div>
                <div className="guide-slider-wrapper">
                    <header className="guide-header guide-slider">
                        <div className="guide-nav-toggle">
                            <Icon name="menu" size={1}/>
                        </div>
                        <div className="container">
                            Electrode Showcase
                            <img
                                src={logo2016}
                                style={{
                                    float: "right",
                                    height: 100,
                                    transform: "rotate(15deg)",
                                    marginTop: -40
                                }}
                            />
                        </div>
                    </header>
                    <div className="guide-content guide-slider">
                        <div className="guide-container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
});

const routes = (
    <Route name="index" path="/" component={Index}>
        <IndexRoute name="home" component={Home}/>
    </Route>
);

ReactDOM.render((
    <Router history={createBrowserHistory()}>{routes}</Router>
), document.querySelector(".js-content"));