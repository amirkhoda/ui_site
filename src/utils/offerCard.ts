import photo1 from "../../public/image/photo1.jpg"
import photo2 from "../../public/image/photo2.jpg"
import photo3 from "../../public/image/photo3.jpg"
import { StaticImageData } from 'next/image'; // Adjust the import path based on actual availability

export interface OfferData {
    image: StaticImageData;
    title: string;
    main: string;
    number:string
}

const offer: OfferData[] = [
    {
        image: photo1,
        title: "Job Recommendation",
        main: "Register and create your personal account.",
        number: "01"
    },
    {
        image: photo2,
        title: "Creates & Build Profile",
        main: "",
        number:"02"
    },
    {
        image: photo3,
        title: "Careers consultation",
        main: "",
        number:"03"
    },
  
]

export default offer;
