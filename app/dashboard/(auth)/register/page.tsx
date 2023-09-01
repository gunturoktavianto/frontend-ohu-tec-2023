import React from "react";
// import imageRegis from "../img/logo192.png";
import Image from "next/image";



function Register() {
    return (
        <>
            <div className="md:flex md:mx-5 md:justify-center md:h-screen md:items-center">
                {/* <div className="img-signup flex justify-center">
                    <Image src={imageRegis} alt="" className="md:w-80" />
                </div> */}

                <div className="form md:w-1/2 md:my-auto">
                    <h1 className="flex font-bold mx-5 text-2xl text-center my-5 md:justify-start md:text-4xl">
                        Register your account!
                    </h1>
                    <form
                        action=""
                        className="form bg-slate-200 mx-5 px-5 py-5 rounded-xl flex flex-col mt-5 mb-10 "
                    >
                        <label htmlFor="" className="font-bold pb-3">
                            Email
                        </label>
                        <input
                            type="email"
                            className="rounded-lg py-1 px-3 drop-shadow-lg"
                            placeholder="Insert your active email"
                            required
                        />
                        <label htmlFor="" className="font-bold py-3">
                            Password
                        </label>
                        <input
                            type="text"
                            className="rounded-lg py-1 px-3 drop-shadow-lg"
                            placeholder="Insert your password"
                            required
                        />
                        <label htmlFor="" className="font-bold py-3">
                            Password confirmation
                        </label>
                        <input
                            type="text"
                            className="rounded-lg py-1 px-3 drop-shadow-lg"
                            placeholder="Re-insert your password"
                            required
                        />

                        <button
                            type="submit"
                            className="rounded-full bg-red-400 w-24 my-5 font-bold py-2 cursor-pointer"
                        >Register</button>
                        <p>
                            Already have an account? Click{" "}
                            <span>
                                <a href="/dashboard/login" className="underline text-red-400">
                                    here
                                </a>
                            </span>{" "}
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
