import React from "react";
import { 
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Carousel ,
} from "@material-tailwind/react";

function CardComponent(){
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <>
            <Card className="max-w-96">
                <CardHeader shadow={false} floated={false} className="max-h-60" onClick={handleOpen}>
                    <img
                    src="/images/portfolio1.png"
                    alt="portfolio1"
                    className="object-cover object-center w-full h-60"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        Server Access Manager
                    </Typography>
                    </div>
                    <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                    >
                    Information system for server access permission management. Created with Laravel framework, PHP, Tailwind CSS UI Library, and other tools.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div>
                        <a 
                        href="https://github.com/fiqto/Server-Room-Log"
                        target="_blank"
                        >
                            <Button
                            ripple={false}
                            fullWidth={false}
                            className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                            Github
                            </Button>
                        </a>
                    </div>
                </CardFooter>
            </Card>

            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody divider={true} className="p-0">
                    <Carousel
                        className="rounded-xl"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-gray-500" : "w-4 bg-gray-300"
                                }`}
                                onClick={() => setActiveIndex(i)}
                                />
                            ))}
                            </div>
                        )}
                        >
                        <img
                            src="/images/portfolio1.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio2.png"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio3.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio4.png"
                            alt="image 4"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio5.png"
                            alt="image 5"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio6.png"
                            alt="image 6"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio7.png"
                            alt="image 7"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio8.png"
                            alt="image 8"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </DialogBody>
            </Dialog>
        </>
    );
}

function SecondCardComponent(){
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <>
            <Card className="max-w-96">
                <CardHeader shadow={false} floated={false} className="max-h-60" onClick={handleOpen}>
                    <img
                    src="/images/portfolio24.png"
                    alt="portfolio1"
                    className="object-cover object-center w-full h-60"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        SIPE
                    </Typography>
                    </div>
                    <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                    >
                    Information system for LPG sales. Created with Laravel framework, PHP, Tailwind CSS UI Library, and other tools.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div>
                        <a 
                        href="https://github.com/fiqto/sistem-informasi-penjualan-elpiji"
                        target="_blank"
                        >
                            <Button
                            ripple={false}
                            fullWidth={false}
                            className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                            Github
                            </Button>
                        </a>
                    </div>
                </CardFooter>
            </Card>

            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody divider={true} className="p-0">
                    <Carousel
                        className="rounded-xl"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-gray-500" : "w-4 bg-gray-300"
                                }`}
                                onClick={() => setActiveIndex(i)}
                                />
                            ))}
                            </div>
                        )}
                        >
                        <img
                            src="/images/portfolio21.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio22.png"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio23.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio24.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio25.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio26.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/portfolio27.png"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </DialogBody>
            </Dialog>
        </>
    );
}

function ThirdCardComponent(){
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <>
            <Card className="max-w-96">
                <CardHeader shadow={false} floated={false} className="max-h-60" onClick={handleOpen}>
                    <img
                    src="/images/portfolio31.png"
                    alt="portfolio31"
                    className="object-cover object-center w-full h-60"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        fiqri14.online (Personal Site)
                    </Typography>
                    </div>
                    <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                    >
                    Web portfolio personal site. Created with Laravel framework as backend and react.js as frontend.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div>
                        <a 
                        href="https://github.com/fiqto/portfolio-web"
                        target="_blank"
                        >
                            <Button
                            ripple={false}
                            fullWidth={false}
                            className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                            Github
                            </Button>
                        </a>
                    </div>
                </CardFooter>
            </Card>

            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody divider={true} className="p-0">
                    <Carousel
                        className="rounded-xl"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-gray-500" : "w-4 bg-gray-300"
                                }`}
                                onClick={() => setActiveIndex(i)}
                                />
                            ))}
                            </div>
                        )}
                        >
                        <img
                            src="/images/portfolio31.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default function ProjectComponent(){
    return(
        <>
            <div className="relative py-10 bg-gray-100 bg-center min-h-screen-xl sm:flex sm:justify-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8">
                    <Typography variant="h1" className="text-center">Project</Typography>
                    <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4 pt-10">
                        <CardComponent />
                        <SecondCardComponent />
                        <ThirdCardComponent />
                    </div>
                </div>
            </div>
        </>
    );
}