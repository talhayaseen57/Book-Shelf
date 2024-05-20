import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigateURL = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/get/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert('An error occured while loading the book. Check the console.');
        console.log(err);
      });
  }, []);

  const handleEditBookFunc = () => {
    const bookData = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/update/${id}`, bookData)
      .then(() => {
        setLoading(false);
        navigateURL('/');
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred while saving the book. Check the console.")
        console.log(err);        
      });
  };

  return (
    <div className='p-5'>
      <div className="flex flex-row items-center">
        <BackButton />
        <h1 className="text-3xl my-5 ml-3 font-bold">Update a Book</h1>
      </div>
      {loading ? (
        <div className='flex justify-center'>
          <Spinner/>
        </div>
      ) : ''}
      <div className='flex flex-col border-2 bg-gray-800 border-gray-800 rounded-md w-full max-w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-white'>Book Title:</label>
          <input 
            type="text" 
            value={title}
            onChange={(inputField) => setTitle(inputField.target.value)}
            className='border-2 border-gray-300 bg-gray-300 rounded-lg px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-white'>Author Name:</label>
          <input 
            type="text" 
            value={author}
            onChange={(inputField) => setAuthor(inputField.target.value)}
            className='border-2 border-gray-300 bg-gray-300 rounded-lg px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-white'>Year of Publish:</label>
          <input 
            type="text" 
            value={publishYear}
            onChange={(inputField) => setPublishYear(inputField.target.value)}
            className='border-2 border-gray-300 bg-gray-300 rounded-lg px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 hover:bg-sky-400 hover:font-bold m-8 rounded-lg' onClick={handleEditBookFunc}>
          Update Book
        </button>
      </div>
    </div>
  )
};

export default UpdateBook;