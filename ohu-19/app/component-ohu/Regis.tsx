import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"


function RegistrationInfo() {
    return (
        <div id="registration" className="flex flex-col items-center justify-center w-full h-[50vw] mx-1 mt-10 mb-10 md:flex-row md:mx-5 lg:mx-10 md:max-w-[90vw] md:h-[30vw]">
       
                <Image
                    src="https://divedigital.id/wp-content/uploads/2023/04/Ai-Hoshino-1.jpg"
                    alt="Photo by Drew Beamer"
                    width={10}
                    height={10}
                    className="object-cover w-32 h-32 rounded-full"
                />
           
            <div>
                <h3 className="mt-3 text-lg px-7 sm:text-2xl md:text-3xl lg:text-4xl">More Than <span className="font-bold">670+ registrants</span> last year, TEC managed to ...</h3>
                <div className="text-sm text-justify px-7 mt-7 sm:text-lg sm:px-14 md:text-xl lg:text-2xl">
                    <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur doloremque eaque obcaecati, ad alias sequi laudantium amet adipisci aliquam incidunt, quisquam, repudiandae saepe corporis."</p>
                    <b>-- David Dewanto</b>
                </div>
            </div>
        </div>
    );
}

export default RegistrationInfo;