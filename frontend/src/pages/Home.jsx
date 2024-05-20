import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books/get')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 font-bold'>Books on Shelf</h1>
        <Link to='/create-book'>
          <MdOutlineAddBox className='text-sky-700 text-3xl' />
        </Link>
      </div>

      <div className='flex justify-center items-center gap-x-4 m-5'>
        <button
          className='px-10 py-2 bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Show in Table
        </button>
        <button
          className='px-10 py-2 bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Show in Card
        </button>
      </div>

      {loading ? (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      ) : (
        showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)
      )}
    </div>
  );
};

export default Home;