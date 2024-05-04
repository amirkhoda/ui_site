import design from "../../public/image/design.svg"
import automobile from "../../public/image/automobile.svg"
import admin from "../../public/image/admin.svg"
import construction from "../../public/image/construction.svg"
import delivered from "../../public/image/delivered.svg"
import finance from "../../public/image/finance.svg"
import marketing from "../../public/image/marketing.svg"
import sales from "../../public/image/sales.svg"

export interface careerData {
    image: string;
    title: string;
    main: string;
}

const careers: careerData[] = [
    {
        image: design,
        title: "Create an account",
        main: "Register and create you"
    },
    {
        image: sales,
        title: "Search Job",
        main: "Find the perfect job tha"
    },
    {
        image: marketing,
        title: "Upload CV/Resume",
        main: "Upload your most r"
    },
    {
        image: finance,
        title: "Get Job",
        main: "Start your new career"
    },
    {
        image: automobile,
        title: "Get Job",
        main: "Start your new career"
    },
    {
        image: delivered,
        title: "Get Job",
        main: "Start your new career"
    },
    {
        image: admin,
        title: "Get Job",
        main: "Start your new career"
    },
    {
        image: construction,
        title: "Get Job",
        main: "Start your new career"
    }
]

export default careers;
