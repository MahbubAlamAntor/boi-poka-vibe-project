import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, author, image, tags, bookId, publisher, totalPages,rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card  shadow-xl bg-base-100 p-6 border-2">
                    <figure className="bg-blue-200 rounded-2xl p-6">
                        <img className="h-[166px]"
                            src={image}
                            alt="Book Images" />
                    </figure>
                    <div className="space-y-3">
                        <div className="flex justify-center gap-9">
                            {
                                tags.map((tag, i) => <div key={i} className="bg-green-100 text-green-800 p-2 rounded-xl mt-3">
                                    <button>{tag}</button>
                                </div>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className="font-medium">By: {author}</p>
                        <div className="border-t-2 border-dashed border-gray-400"></div>
                        <div>
                            <p>Total page: {totalPages}</p>
                            <p>Ratings: {rating}</p>
                        </div>
                        <div className="card-actions justify-between">
                            <div className="badge">{publisher}</div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;