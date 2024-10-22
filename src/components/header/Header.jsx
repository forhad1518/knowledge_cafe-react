import profile from "../../assets/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center py-3 border-b-2 my-10">
            <div>
                <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;