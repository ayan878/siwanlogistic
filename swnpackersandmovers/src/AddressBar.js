import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export function AddressBar() {
  return (
    <div className="addressBar">
      <div className="address">
        <h3>
          <span>
            <FaLocationDot />
          </span>
          Shop no-2 op Thana Bypass Road, near<br></br> Rustam petrol pump,
          Chakiya, Siwan, Bihar 841226
          <br />
          <FaTelegramPlane />
          siwanpackersandmovers@gmail.com
        </h3>
      </div>
      <div className="companyName">
        <h1>Siwan Packers And Movers</h1>
        <h2 className="slogan">(We assure our services are secure)</h2>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
