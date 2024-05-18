import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigateURL = useNavigate();
  const handleSaveBook = () => {
    const bookData = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books/save', bookData)
      .then(() => {
        setLoading(false);
        navigateURL('/');
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred while saving. Kindly check the console.")
        console.log(err);        
      });
  };

  return (
    <div className='p-5'>
      <div className="flex flex-row items-center">
        <BackButton />
        <h1 className="text-3xl my-5 ml-3 font-bold">Add a new Book</h1>
      </div>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x2 w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Book Title: </label>
          <input 
            type="text" 
            value={title}
            onChange={(inputField) => setTitle(inputField.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Author Name: </label>
          <input 
            type="text" 
            value={author}
            onChange={(inputField) => setAuthor(inputField.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Year of Publish: </label>
          <input 
            type="text" 
            value={publishYear}
            onChange={(inputField) => setPublishYear(inputField.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-200 m-8' onClick={handleSaveBook}>
          Save Book
        </button>
      </div>
    </div>
  )
};

export default CreateBook;