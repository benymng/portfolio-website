import React from "react";
import { useCallback } from "react";
import Link from "next/link";

export const BlogCard = (props) => {
  const handleOnLoad = useCallback(() => {
    props.setImageCount(props.imageCount + 1);
  }, []);

  return (
    <div>
      <a>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-72"
              src={props.image}
              onLoad={handleOnLoad}
            />
          </figure>
          <div className="card-body opacity-50">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </a>
    </div>
  );
};
