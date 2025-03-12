"use client"
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const router = useRouter();
    const { user, logOut } = useAuth();
    useEffect(() => {
        if (!user) {
            router.replace("/");
        }
    }, [user, router]);
    const handleSignOut = async () => {
        try {
            await logOut();
            toast('Logged out successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        } catch (error) {
            console.log("Sign out error:", error.message);
            // alert("Sign out failed!");
            toast.warn('🦄 Sign out failed!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };
    return <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
        <div className='flex h-10 bg-transparent absolute top-0 left-0'>
            <div className=' md:ml-16 ml-4 mt-10 flex gap-x-2 justify-between relative' >
                <Link className="self-center py-auto text-white md:mt-0 mt-4" href={"/about_us"}>
                    <div className=""> About Us</div>
                </Link>
                <div className="ml-2 md:ml-[clamp(2rem,10vw,50vw)] lg:ml-[60vw] flex justify-center items-center mt-2 md:gap-8 gap-2">
                    <Link href={"/emergency"}>
                        <button className=" hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 md:mb-2 md:me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 z-10">
                            <span className="relative md:px-5 md:py-2.5 px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Emergency Services
                            </span>
                        </button>
                    </Link>
                    <Link href={"/my_issues"}>
                        <button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 md:mb-2 md:me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 z-10">
                            <span className="relative md:px-5 md:py-2.5 px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                My Issues
                            </span>
                        </button>
                    </Link>

                    <button className=" hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 md:mb-2 md:me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 z-10 " onClick={handleSignOut}>
                        <span className="relative md:px-5 md:py-2.5 px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Sign Out
                        </span>
                    </button>
                </div>

            </div>
        </div>
    </>
}

export default Navbar
