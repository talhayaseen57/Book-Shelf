import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigateURL = useNavigate();
  const { id } = useParams();

  const handleDeleteBookFunc = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/delete/${id}`)
      .then(() => {
        setLoading(false);
        navigateURL('/');
      })
      .catch((err) => {
        setLoading(false);
        alert('An error occured while deleting the book. Check thr console.');
        console.log(err);
      })
  };

  const handleDonotDeleteButtonFunc = () => {
    navigateURL('/');
  };

  return (
    <div className="p-5">
      <div className="flex flex-row items-center">
        <BackButton />
        <h1 className="text-3xl my-5 ml-3 font-bold">Delete a Book</h1>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : ''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-md w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">Are you sure you want to delete this book?</h3>
        <button 
          className="p-5 bg-red-600 text-white m-5 w-full"
          onClick={handleDeleteBookFunc}
        >
          Yeah, Delete it!
        </button>
        <button 
          className="p-5 bg-green-600 text-white m-5 w-full"
          onClick={handleDonotDeleteButtonFunc}
        >
          NoooooooooO!!
        </button>
      </div>
    </div>
  )
};

export default DeleteBook;