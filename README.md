# carousel-tailwind-react

An image carousel/image-slider react-component written in tailwind css.

# usage

```javascript
import Carousel from "./src/index.js";

const images = ["img:url", "img:url", "img:url"];

export default function Homepage() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}
```
