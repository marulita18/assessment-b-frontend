import React from "react";
import { useEffect, useState } from "react";
import { fetchSpaces } from "../store/space/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomepageLoading,
  selectHomepageSpaces,
} from "../store/space/selector";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectHomepageSpaces);
  const loading = useSelector(selectHomepageLoading);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <div>
      {loading ? "Loading, please wait" : null}
      <h1
        style={{ fontSize: "40px", textAlign: "center", color: "blueviolet" }}
      >
        Welcome to your homepage
      </h1>

      {spaces.map((space) => {
        return (
          <div
            key={space.id}
            style={{
              padding: "40px",
              margin: "1em",
              background: `${space.backgroundColor}`,
              color: `${space.color}`,
            }}
          >
            <ul>
              <li
                style={{
                  margin: "10px",
                  listStyle: "none",
                }}
              >
                {space.title}
              </li>
            </ul>

            <button
              style={{
                textAlign: "center",
                borderRadius: "2px",
                border: "solid, 1px",
                color: `${space.color}`,
                backgroundColor: "#CFCFAF",
                padding: "10px",
              }}
            >
              Visit this space
            </button>
          </div>
        );
      })}
    </div>
  );
}
