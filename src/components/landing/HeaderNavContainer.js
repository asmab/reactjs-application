import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-toggleable-sm main-bg navbar-inverse">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <a className="header-logo" target="_blank" href="https://pasientsky.no/"></a>
                        <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/patients" >Patients</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
})

export default connect(mapStateToProps)(HeaderNavContainer)