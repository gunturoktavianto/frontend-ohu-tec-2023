function RegistrationInfo() {
    return (
        <div className="flex flex-col justify-center items-center font-Poppins md:flex-row mt-10 mx-1 md:mx-5 lg:mx-10">
            <img src="assets/img/dummyImage.jpg" className="w-40 h-40 rounded-full sm:w-60 sm:h-60" />
            <div>
                <h3 className="px-7 text-lg mt-3 sm:text-2xl md:text-3xl  lg:text-4xl">More Than <span className="font-bold">700+ registrants</span> last year, TEC managed to ...</h3>
                <div className="px-7 mt-7 text-sm sm:text-lg sm:px-14 text-justify md:text-xl lg:text-2xl">
                    <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur doloremque eaque obcaecati, ad alias sequi laudantium amet adipisci aliquam incidunt, quisquam, repudiandae saepe corporis."</p>
                    <b>-- David Dewanto</b>
                </div>
            </div>
        </div>
    );
}

export default RegistrationInfo;