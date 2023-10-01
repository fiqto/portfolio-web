import { Head } from '@inertiajs/react';
import NavbarComponent from './LandingPage/NavbarComponent';
import HomeComponent from './LandingPage/HomeComponent';
import ProjectComponent from './LandingPage/ProjectComponent';
import ExperienceComponent from './LandingPage/ExperienceComponent';
import ContactComponent from './LandingPage/ContactComponent';
import FooterComponent from './LandingPage/FooterComponent';


export default function Welcome() {
    return (
        <>
            <Head title='Fiqri Baihaqi' />
            <NavbarComponent />
            <HomeComponent />
            <div id="project">
                <ProjectComponent />
            </div>
            <div id="experience">
                <ExperienceComponent />
            </div>
            <div id="contact">
                <ContactComponent />
            </div>
            <FooterComponent />
        </>
    );
}
