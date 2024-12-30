import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddBookmark, handleMarkAsRead}) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-20 space-y-4'> 
            <img className='w-full mb-8' src={cover} alt="" />

            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'> {author} </h3>
                        <p className=''> {posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <span className='font-bold'> {reading_time} min read </span>
                    <button
                        onClick={() => handleAddBookmark(blog)}>
                         <FaBookmark></FaBookmark>
                    </button>
                </div>

                
            </div>

            <h2 className='text-4xl font-bold'> {title} </h2>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=''> {hash}  </a> </span>)
                }
            </p>

            <button 
            className='text-blue-900 font-bold underline'
            onClick={() => handleMarkAsRead(id, reading_time)} >
                Mark as Read
            </button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
} 

export default Blog;