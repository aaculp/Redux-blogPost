import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

const mapStateToProps = state => {
    return { userID: state.userID }
}

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return <div>User Header</div>
    }
}

export default connect(null, { fetchUser })(UserHeader);