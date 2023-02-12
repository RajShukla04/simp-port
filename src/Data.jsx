import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [

 <>
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
 </>
];

export const bios = [
  {
    id: 1,
    icon: FaUser,
    key: "Name",
    value: "Abeezarar",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    key: "Phone",
    value: "+959883271929",
  },
  {
    id: 3,
    icon: FaPaperPlane,
    key: "Email",
    value: "abee02@gmail.com",
  },
];

export const icons = [
  FaHtml5,
  FaCss3,
  DiJavascript,
  SiTypescript,
  FaReact,
  FaNodeJs,
  FaSass,
  FaFigma,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm",
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm",
  },
];
export const finishes = [
  {
    id: 1,
    number: "6+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    infoText: "16 Road, TharKayTa , Yangon",
  },
  {
    id: 2,
    icon: FaPaperPlane,
    infoText: "abee02@gmail.com",
  },
  {
    id: 3,
    icon: FaPhoneAlt,
    infoText: "+959-883-271-929",
  },
];