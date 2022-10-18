import { Link, useParams } from "react-router-dom";
import './index.css';

function ErrorPage() {
  let { code } = useParams();
  
  return (
    <div className="container text-center">

        <div className="text-center mt-10">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="48" fill="#FBDECF"/>
            <path d="M45.6 55.2H50.4V60H45.6V55.2ZM45.6 36H50.4V50.4H45.6V36ZM47.976 24C34.728 24 24 34.752 24 48C24 61.248 34.728 72 47.976 72C61.248 72 72 61.248 72 48C72 34.752 61.248 24 47.976 24ZM48 67.2C37.392 67.2 28.8 58.608 28.8 48C28.8 37.392 37.392 28.8 48 28.8C58.608 28.8 67.2 37.392 67.2 48C67.2 58.608 58.608 67.2 48 67.2Z" fill="#9B101C"/>
          </svg>
        </div>

        <div className="mt-5">
          <h1> {code} Error</h1>
        </div>


        <div className="mt-5">
          { code && code === '404'  ? <span>Sorry, the results could not be found</span> : "" }
          { code && code === '500'  ? <span>Server Error</span> : "" }
          { code && code === 'Network'  ? <span>Sorry, your Network is Unstable, kindly check your internet</span> : "" }
        </div>

        <div className="text-center mx-auto flex">
          <Link id="reload-countries" to="/" className="mt-5 mx-auto btn" > Refetch Countries  </Link>
        </div>
    </div>
  )
}

export default ErrorPage;

