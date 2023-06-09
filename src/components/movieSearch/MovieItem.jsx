/* eslint-disable react/prop-types */

import { Fragment } from "react";

// eslint-disable-next-line react/prop-types
const MovieItem = ({ data }) => {
  return (
    <Fragment>
      <div className="p-3 bg-white shadow rounded-2xl">
        <div className="h-[297px]">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=""
          />
        </div>
        <div className="p-[30px]">
          <h3 className="mb-4 text-lg font-semibold text-black">
            {data.title}
          </h3>
          <p className="text-[#9999] text-sm mb-6 ">{data.overview}</p>
          <div className="flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span className="text-sm font-semibold text-[#333]">
              {data.vote_average}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieItem;
