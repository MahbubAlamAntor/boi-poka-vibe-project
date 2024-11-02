import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList, addToWhiteList } from "../../utility/addToDb";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    // console.log(id)
    const book = useLoaderData();
    // console.log(book)

    const newData = book.find((b) => b.bookId = id)
    console.log(newData)
    // console.log(newData)
    const { bookName, author, image, review, tags, publisher, yearOfPublishing, category,totalPages,rating } = newData;

    const handleMarkAdRead = (id) => {
        addToStoredList(id)
    }

    const handleAddToWhiteList = (id) => {
        addToWhiteList(id)
    }

    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="bg-slate-300 rounded-xl">
                <img className="p-24 mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">{bookName}</h2>

                <p className="text-lg font-medium">By: {author}</p>
                <p className="text-lg font-medium border-y p-2">{category}</p>
                <p><span className="text-lg font-extrabold">Review : </span> {review}</p>
                <p className="space-x-5 flex items-center"><span className="font-bold flex gap-3 text-lg">Tag</span> {tags.map((tag, i) => <div className="bg-green-100 text-green-800 p-1 rounded-full" key={i}>
                    {tag}
                </div>)}</p>
                <div className="flex items-center justify-between">
                    <span>Number of Pages:</span>
                    <span className="text-lg font-bold">{totalPages}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Publisher:</span>
                    <span className="text-lg font-bold">{publisher}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Year of Publishing:</span>
                    <span className="text-lg font-bold">{yearOfPublishing}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="text-lg font-bold">{rating}</span>
                </div>
                <div className="space-x-6 text-lg">
                    <button onClick={() => handleMarkAdRead(bookId)} className="btn btn-outline btn-accent">Mark Ad Read</button>
                    <button onClick={() => handleAddToWhiteList(bookId)} className="btn btn-accent">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;