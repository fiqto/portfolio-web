import { Typography, Button, } from "@material-tailwind/react";

export default function HomeComponent(){
    return(
        <>
            <div className="relative min-h-screen-xl bg-gray-900 py-20 bg-center sm:flex sm:justify-center sm:items-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-6 items-center">
                        <div className="md:col-start-1 md:col-end-4 h-auto md:h-96 p-4  bg-gray-300">
                            <Typography variant="h1">Hi,</Typography>
                            <Typography variant="h1">I'm Fiqri Baihaqi</Typography>
                            <Typography variant="lead">Full-Stack Developer</Typography>
                            <Typography variant="paragraph" className="my-2">Fresh graduate from Telkom Institute of Technology Surabaya. Have a good knowledge of Web Development. Currently learning Frontend Engineering with React.js, and Backend Development using Laravel. Have experience working in a team with software development methodologies such as Agile Scrum.</Typography>
                            <a href="/#contact">
                                <Button variant="filled" color="dark" className="mt-2">Contact Me</Button>
                            </a>
                        </div>
                        <div className="md:col-end-7 md:col-span-3 bg-gray-300">
                            <img
                            className="h-auto md:h-96 w-full object-cover object-center p-4"
                            src="/images/profile2.png"
                            alt="profile"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}