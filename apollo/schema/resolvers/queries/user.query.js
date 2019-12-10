const { users } = require('../../stubs')

exports.getUserById = (_, _args, { user }) => {
    console.log('user ', user)
    const currentUser = users.find(u => u.id === user.id)
    if(currentUser) {
        return currentUser
    } else {
        throw new Error('User does not exist.')
    }
}