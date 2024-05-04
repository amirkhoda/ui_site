import amazon from "../../public/image/amazon.svg";
import figma from "../../public/image/figma.svg";
import google from "../../public/image/google.svg";
import linkedin from "../../public/image/linkedin.svg";
import microsoft from "../../public/image/microsoft.svg";
import twitter from "../../public/image/twitter.svg";

export interface JobData {
  image: string;
  title: string;
  region: string;
  position: string;
  text: string;
}

const job: JobData[] = [
  {
    image: figma,
    title: "Figma",
    region: "USA",
    position: "Front-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    image: google,
    title: "Google",
    region: "USA",
    position: "Backend-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    image: linkedin,
    title: "Linkedin",
    region: "USA",
    position: "Front-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    image: amazon,
    title: "Amazon",
    region: "USA",
    position: "Backend-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    image: twitter,
    title: "Twitter",
    region: "USA",
    position: "Front-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    image: microsoft,
    title: "Microsoft",
    region: "USA",
    position: "Backend-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
];

export default job;
