import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-bannerColor rounded-2xl py-28">
                <div className="hero-content m-16 flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-xl shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-primary text-white mt-6 text-xl">View The List</button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Banner;