import Bookmark_1 from "./Bookmark_1";
const Bookmark = ({ bookmarks, readTime }) => {
    return (
        <div className="md:w-1/3 space-y-6">
            {/* Read Time Container */}
            <div className="bg-[#1111110D] p-8 rounded-lg text-center">
                <h2 className="text-xl text-purple-700 font-bold">Spent time on read: {readTime} min</h2>
            </div>
            {/* Bookmarks Read Container */}
            <div className="bg-[#1111110D] p-8 rounded-lg">
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                <br />
                <div className="space-y-4">
                    {bookmarks.map(bookmark => <Bookmark_1 bookmark={bookmark} ></Bookmark_1>)}
                </div>
            </div>
        </div>
    );
};

export default Bookmark;