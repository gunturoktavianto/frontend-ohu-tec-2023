import image from "../img/logo192.png";


function RegistrationInfo() {
    return (
        <div id="registration" className="flex flex-col items-center justify-center w-screen md:flex-row">
            <img src={image} className="w-40 h-40 rounded-full sm:w-60 sm:h-60" />
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