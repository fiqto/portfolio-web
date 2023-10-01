import { Typography, } from "@material-tailwind/react";

export default function FooterComponent(){

    return(
        <>
            <footer className="flex w-full flex-row flex-wrap items-center justify-center px-6 gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal">
                    &copy; 2023 Material Tailwind
                </Typography>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/fiqri14/"
                        target="_blank"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Linkedin
                    </Typography>
                    </li>
                    <li>
                    <Typography
                        as="a"
                        href="https://github.com/fiqto"
                        target="_blank"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Github
                    </Typography>
                    </li>
                    <li>
                    <Typography
                        as="a"
                        href="mailto:fiqto14@gmail.com"
                        target="_blank"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Email
                    </Typography>
                    </li>
                </ul>
            </footer>
        </>
    );
}