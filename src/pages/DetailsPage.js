import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { spaceById } from "../store/space/actions";
import { selectDetailsPageSpaces } from "../store/space/selector";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spaces = useSelector(selectDetailsPageSpaces);

  useEffect(() => {
    dispatch(spaceById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3>Details page</h3>
      {!spaces ? (
        "Loading"
      ) : (
        <div
          style={{
            backgroundColor: `${spaces.backgroundColor}`,
            color: `${spaces.color}`,
          }}
        >
          <h1>{spaces.title}</h1>
          <p>{spaces.description}</p>
          {spaces.stories &&
            spaces.stories
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((story) => {
                return (
                  <div key={story.id} style={{ padding: "1em", margin: "1em" }}>
                    <h3>{story.name}</h3>
                    <p>{story.content}</p>
                    <img
                      src={story.imageUrl}
                      alt="space"
                      style={{ maxWidth: "400px" }}
                    ></img>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}
