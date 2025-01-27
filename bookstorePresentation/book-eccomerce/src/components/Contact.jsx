import YoutubeLogo from "../assets/youtube-svgrepo-com.svg";
import GitHubLogo from "../assets/github-mark.svg";
import TikTokLogo from "../assets/tiktok-svgrepo-com.svg";

function Contact() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="contact-info-container">
        <h1>You can contact us</h1>

        <div className="contact-row">
          <h2>Email</h2>
          <p>d2220056@aueb.gr</p>
          <p>d2220157@aueb.gr</p>
        </div>

        <div className="contact-row">
          <h2>Phone</h2>
          <p>69 12345678</p>
          <p>69 12398678</p>
        </div>

        <div className="contact-row">
          <h2>Fax</h2>
          <p>210 123 367 55</p>
        </div>

        <div className="contact-row">
          <h2>Adress</h2>
          <p>Athens, Patision 76 3rd floor, H/Y 1</p>
        </div>

        <div style={{ marginTop: "10px" }}>
          <h2 style={{ textAlign: "center" }}>Useful Links</h2>
          <div className="social-media-container">
            <a href="https://www.youtube.com/" target="_blank">
              <img src={YoutubeLogo} alt="" />
            </a>
            <a href="https://github.com/XPanagiotis" target="_blank">
              <img src={GitHubLogo} alt="" />
            </a>
            <a href="https://www.tiktok.com/en/" target="_blank">
              <img src={TikTokLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
