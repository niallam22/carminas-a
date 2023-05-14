import Home from "../Home";
import Actor from "../Actor";
import Contact from "../Contact";
import Coach from "../Coach";
import Script from "../Script"
// import About from "../About"
import BlogGallery from "../BlogGallery"
import Gallery from "../Gallery";
import Testimonial from "../Testimonial"

export default function IndexPage() {

  return (
    <>
      <Home></Home>
      <Actor></Actor>
      <Coach></Coach>
      <Script></Script>
      {/* <About></About> */}
      <BlogGallery></BlogGallery>
      <Gallery></Gallery>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
}