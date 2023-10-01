import { 
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography, 
} from "@material-tailwind/react";

export default function ExperienceComponent(){
    return(
        <>
            <div className="relative min-h-screen-xl bg-gray-300 py-10 bg-center sm:flex sm:justify-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8">
                    <Typography variant="h1" className="text-center">Experience</Typography>

                    <div className="max-w-[32rem] pt-10">
                        <Timeline>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none">
                                Junior Backend Developer Intern at Dipo Star Finance
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-2">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                Develop a web application for server access permission management.
                                Learn the Laravel framework and other libraries to support web application development and performance.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </>
    );
}