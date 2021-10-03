import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeStoryById } from "../store/user/actions";
import { selectMySpace } from "../store/user/selectors";
import NewStoryForm from "./NewStoryForm";

export default function MySpace() {
  const userSpace = useSelector(selectMySpace);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  //   console.log("uswr space", userSpace);

  return (
    <div>
      {!userSpace ? (
        "Loading, bro!"
      ) : (
        <div>
          <h1
            style={{
              backgroundColor: `${userSpace.backgroundColor}`,
              color: `${userSpace.color}`,
              textAlign: "center",
            }}
          >
            {userSpace.title}
          </h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
            }}
            style={{
              backgroundColor: "blueviolet",
              padding: "10px",
              border: "1px, solid, white",
              color: "white",
              fontWeight: "bold",
              boxShadow: "2px 2px 2px gray",
            }}
          >
            Post a cool story, bro!
          </button>
          {showForm ? <NewStoryForm /> : null}
          <ul>
            <li style={{ listStyle: "none" }}>
              {userSpace.stories.map((story) => {
                return (
                  <div key={story.id} style={{ padding: "1em", margin: "1em" }}>
                    <h2>{story.name}</h2>
                    <p>{story.content}</p>
                    <img
                      src={story.imageUrl}
                      alt="one pic says more than a million words"
                      style={{ maxWidth: "300px", margin: "10px" }}
                    />
                    <br />
                    <button
                      onClick={() => {
                        console.log("whats my id", story.id);
                        dispatch(removeStoryById(story.id));
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        margin: "10px",
                      }}
                    >
                      Remove story
                    </button>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
