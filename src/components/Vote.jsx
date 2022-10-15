import React from "react";
import { Link } from "react-router-dom";

import Article from "./Article";
import styles from "./../css/vote.module.css";

import Space from "./../images/space.webp";

export default function Vote() {
  return (
    <div>
      <div className={styles.contain}>
        <Article image={Space} title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor rhoncus vulputate laoreet, nulla lorem rhoncus orci, eget auctor ipsum risus id velit. Nam ac risus sit amet lacus tempor sollicitudin. Curabitur vestibulum tincidunt sem, et dapibus metus laoreet id." by="Carter" />

        <Article image={Space} title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor rhoncus vulputate laoreet, nulla lorem rhoncus orci, eget auctor ipsum risus id velit. Nam ac risus sit amet lacus tempor sollicitudin. Curabitur vestibulum tincidunt sem, et dapibus metus laoreet id." by="Hunter" />

        <Article image={Space} title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor rhoncus vulputate laoreet, nulla lorem rhoncus orci, eget auctor ipsum risus id velit. Nam ac risus sit amet lacus tempor sollicitudin. Curabitur vestibulum tincidunt sem, et dapibus metus laoreet id." by="Elijah" />
      </div>
      <Link to="/carter/">Home</Link>
    </div>
  )
}