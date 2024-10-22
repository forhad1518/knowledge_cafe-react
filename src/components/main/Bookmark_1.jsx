const Bookmark_1 = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div>
            <div className="bg-[#FFFFFF] p-6 rounded-lg">
                <h2 className="font-bold">{title}</h2>
            </div>
        </div>
    );
};

export default Bookmark_1;