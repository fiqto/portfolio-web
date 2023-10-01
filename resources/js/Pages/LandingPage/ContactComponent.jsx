import { Typography, Textarea, Input, Button, } from "@material-tailwind/react";
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function ContactComponent(){

    const { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        message: "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        post(route("messages.store"));
    }

    return(
        <>
            <div className="relative min-h-screen-xl bg-gray-100 py-10 bg-center sm:flex sm:justify-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8">
                    <Typography variant="h1" className="text-center">Contact Me</Typography>
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-96 md:w-96 pb-2 pt-10">
                            <Input 
                            label="Name" 
                            name="name"
                            value={data.name}
                            errors={errors.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            required
                            />
                            <span className="text-red-600">
                                {errors.name}
                            </span>
                        </div>
                        <div className="max-w-96 md:w-96 py-2">
                            <Input 
                            label="Email" 
                            name="email"
                            value={data.email}
                            errors={errors.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                            required
                            />
                            <span className="text-red-600">
                                {errors.email}
                            </span>
                        </div>
                        <div className="max-w-96 md:w-96 py-2">
                            <Textarea 
                            label="Message" 
                            name="message"
                            value={data.message}
                            errors={errors.message}
                            onChange={(e) =>
                                setData("message", e.target.value)
                            }
                            required
                            />
                            <span className="text-red-600">
                                {errors.message}
                            </span>
                        </div>
                        <Button type="submit" variant="filled">Send Message</Button>
                    </form>
                </div>
            </div>
        </>
    );
}