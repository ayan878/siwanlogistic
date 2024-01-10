import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
export function AddressBar() {
  return (
    <div>
      <div className="addressBar">
        <h1 className="companyName">Siwan Packers And Movers</h1>
        <h4 className="slogan">(We assure our services are secure)</h4>
        <h3>
          <span>
            <FaLocationDot />
          </span>
          Shop no-2 op Thana Bypass Road, near<br></br> Rustam petrol pump,
          Chakiya, Siwan, Bihar 841226
        </h3>
        <br />
        <FaTelegramPlane />
        siwanpackersandmovers@gmail.com
      </div>
      <div></div>
    </div>
  );
}
