/*

    NOTE: This is just an example of how you can import and use this carousel
    in your own react pages or components in framework of your choice.


*/

import Carousel from "./Carousel";

const images = [
  "https://images.unsplash.com/photo-1681405203174-240c946cf06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  "https://images.unsplash.com/photo-1647337844509-3da06f493872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  "https://images.unsplash.com/photo-1681953447398-d5193e0b024c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
];

export default function Homepage() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}
