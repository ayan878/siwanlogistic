import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import ImageSlider from "./ImageSlider";
import { AddressBar } from "./AddressBar";

function App() {
  const slides = [
    {
      imageUrl:
        "https://shtheme.org/demosd/logistek/wp-content/uploads/2021/04/1.jpg",
      quote: "Enjoy! Hassel Free Delivery Services",
      experience:
        "We have almost 35+ year of experience for providing consulting services soltions",
    },
    {
      imageUrl:
        "https://shtheme.org/demosd/logistek/wp-content/uploads/2021/04/2.jpg",
      quote: "Enjoy! Hassel Free Delivery Services",
      experience:
        "We have almost 35+ year of experience for providing consulting services soltions",
    },
    {
      imageUrl:
        "https://shtheme.org/demosd/logistek/wp-content/uploads/2021/04/3.jpg",
      quote: "Enjoy! Hassel Free Delivery Services",
      experience:
        "We have almost 35+ year of experience for providing consulting services soltions",
    },
    // Add more slides with image URLs and quotes
  ];
  return (
    <div className="App">
      <AddressBar/>
      <Logo />
      <Navbar />
      <ImageSlider slides={slides} />
    </div>
  );
}
export default App;
