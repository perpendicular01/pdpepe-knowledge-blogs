import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-2 md:mx-20 mb-3 '>
            <h1 className='text-3xl font-bold'>PdPepe Blogs</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;