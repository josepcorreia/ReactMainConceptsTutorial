import React from "react";
import { Post } from "./types";

// It is necessary the key.
// Keys should be given to the elements inside the array to give the elements a stable identity
// function NumberList(props: { numbers: number[] }) {
//   const listItems = props.numbers.map((number) => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }
//
//A good rule of thumb is that elements inside the map() call need keys
//
// function ListItemNumber(props: { key: string; value: number }) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props: { numbers: number[] }) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     // Correct! Key should be specified inside the array.
//     <ListItemNumber key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// }

function ListItem(props: { key: string; id: number; value: string }) {
  return (
    <li>
      {props.id} - {props.value}
    </li>
  );
}

function Sidebar(props: { posts: Post[] }) {
  const listItems = props.posts.map((post) => (
    <ListItem key={post.id.toString()} id={post.id} value={post.title} />
  ));
  return <ul>{listItems}</ul>;
}

function BlogPost(props: { posts: Post[] }) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

function Blog(props: { posts: Post[] }) {
  return (
    <div>
      <hr />
      <h2>Test Blog</h2>
      <Sidebar posts={props.posts} />
      <hr />
      <BlogPost posts={props.posts} />
    </div>
  );
}

export function Lists() {
  const posts = [
    { id: 1, title: "First Post", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", content: "You can install React from npm." }
  ];
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
}
