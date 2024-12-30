import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

 const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ">

            <div className='bg-purple-100 ml-5 mt-2 px-16 py-5 rounded-md border-blue-600 border-[1px]'>
                <h3 className='text-2xl font-bold'> Spend time on read: {readingTime} </h3>
            </div>

            <div className='bg-gray-100 ml-5 mt-2 p-6 rounded-lg '>
                <h2 className='text-xl font-bold'> BookMarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>

            
            
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number  
}

export default Bookmarks;