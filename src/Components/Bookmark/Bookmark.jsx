import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark

    return (
        <div className='bg-white rounded-lg p-4 m-4'>

            <h3 className='text-sm font-bold'> {title} </h3>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;