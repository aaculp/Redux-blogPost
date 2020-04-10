import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

const mapStateToProps = state => {
    return { users: state.users }
}

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const user = this.props.users.find(user => user.id == this.props.userId)
        if (!user) {
            return <div>Loading ...</div>
        }
        return <div className='header'>{user.name}</div>
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);