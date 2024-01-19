import PropTypes from 'prop-types'

function Link({title, content, users}){
    
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{users}</p>
        </div>
        
    )
}

Link.propTypes = {
    title :PropTypes.string.isRequired,
    content: PropTypes.string,
    users: PropTypes.array
}

Link.defaultProps =  {
    users: ['testuser1'],
    content:""
}

export default Link