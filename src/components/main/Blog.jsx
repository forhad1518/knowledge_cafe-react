import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddedBM, handleReadTime }) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='border-b-2 mb-9 space-y-5'>
            {/* Cover Img Container */}
            <div>
                <img className='w-full object-cover' src={cover} alt="" />
            </div>

            {/* Posted Informations */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    {/* Author img */}
                    <div>
                        <img className='w-[50px] h-[50px]' src={author_img} alt="" />
                    </div>
                    {/* Posted Time */}
                    <div>
                        <h4 className='text-xl font-bold'>{author}</h4>
                        <p>{posted_date} </p>
                    </div>
                </div>
                {/* Bookmark */}
                <div>
                    <p>{reading_time} Min Read <button onClick={() => handleAddedBM(blog)}> <i  className="fa-regular fa-bookmark"></i> </button></p>
                </div>
            </div>
            {/* Titile Informations */}
            <div className='space-y-5'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p>
                    {hashtags.map((hash,idx) => <span key={idx} className='text-lg text-gray-500'><a href=""> #{hash}</a></span>)}
                </p>
                <p><button onClick={() => handleReadTime(reading_time, id)} className='text-5 text-purple-600 underline'>Mark As Read</button></p>
                <br />
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddedBM: PropTypes.func.isRequired
}
export default Blog;

// {
//     "id": 1,
//     "cover": "https://i.ibb.co/84Zfw2n/1.jpg",
//     "title": "Top 10 ES6 Features You Must Know",
//     "author_img": "https://i.ibb.co/VvLNdLL/boy1.png",
//     "author": "Hamza Sohail",
//     "posted_date": "September 15, 2023",
//     "reading_time": 5,
//     "hashtags": [
//         "beginners",
//         "es6"
//     ]
// }