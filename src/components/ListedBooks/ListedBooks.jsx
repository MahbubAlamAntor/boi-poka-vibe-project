import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readBook, setReadBook] = useState()
    const [sort, setSort] = useState('')
    const allBooksData = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();

        const storedReadListStr = storedReadList.map((id) => parseInt(id));
        console.log(storedReadListStr, typeof storedReadListStr)

        const readBooksList = allBooksData.filter((book) => storedReadListStr.includes(book.bookId));
        setReadBook(readBooksList)

    }, []);

    const handleSort = sortType => {
        setSort(sortType);
        if(sortType === 'No Of pages'){
            const sortedReadList = [...readBook].sort((a,b) => a.totalPages - b.totalPages)
            setReadBook(sortedReadList)
        }
        if(sortType === 'Ratings') {
            const sortedReadListRatings = [...readBook].sort((a,b) => a.rating - b.rating);
            setReadBook(sortedReadListRatings)
        }
    }

    return (
        <div>

            <details class="dropdown">
                <summary class="btn m-1">{sort ? `Sort By : ${sort}` : 'Sort By'}</summary>
                <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('No Of pages')}><a>Number of pages</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-bold'>Read list Books {readBook?.length}</h2>
                    {
                        readBook?.map((book) => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-bold'>WishList Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;