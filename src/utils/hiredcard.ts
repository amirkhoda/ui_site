import job from "../../public/image/job.svg";
import message from "../../public/image/message.svg";
import resume from "../../public/image/resume.svg";
import person from "../../public/image/person.svg";

export interface DataItem {
    image: string;
    title: string;
    main: string;
}

const data: DataItem[] = [
    {
        image: person,
        title: "Create an account",
        main: "Register and create your personal account."
    },
    {
        image: message,
        title: "Search Job",
        main: "Find the perfect job that fits your skills."
    },
    {
        image: resume,
        title: "Upload CV",
        main: "Upload your most recent CV or resume."
    },
    {
        image: job,
        title: "Get Job",
        main: "Start your new career with your new job."
    }
]

export default data;
