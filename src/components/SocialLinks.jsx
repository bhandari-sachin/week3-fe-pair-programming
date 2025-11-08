import SocialLink from "./SocialLink";
import { socialLinks } from "../data.js";

function SocialLinks() {
  return (
    <ul className="nav-icons">
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link}></SocialLink>;
      })}
    </ul>
  );
}

export default SocialLinks;
