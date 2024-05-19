import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
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
      {loading ? (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      ) : (
        <table className='w-full border-separate'>
          <thead>
            <tr className='h-10'>
              <th className='border border-slate-600 rounded-md'>No.</th>
              <th className='border border-slate-600 rounded-md'>Book Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Author Name
              </th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Year of Publish
              </th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {book.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.author}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/show-book/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/edit-book/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/delete-book/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;