import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="border-2 border-gray-500 rounded-lg px-3 py-1 m-3x relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-5 py-3 bg-red-400 rounded-lg">
            {book.publishYear}
          </h2>
          <h4 className="my-2 text-gray-500">{book._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-3 p-3">
            <Link to={`/show-book/${book._id}`}>
              <BsInfoCircle className='text-2xl text-green-800' />
            </Link>
            <Link to={`/update-book/${book._id}`}>
              <AiOutlineEdit className='text-2xl text-yellow-600' />
            </Link>
            <Link to={`/delete-book/${book._id}`}>
              <MdOutlineDelete className='text-2xl text-red-600' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default BooksCard;