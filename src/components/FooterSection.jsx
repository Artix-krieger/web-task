export function FooterSection() {
    return (
        <footer
            className="bg-yellow-950 self-stretch flex w-full flex-col mt-9 px-20 py-12 items-start max-md:max-w-full max-md:px-5">
            <div className="text-red-100 text-xl font-medium leading-8 whitespace-nowrap ml-20 mt-3.5 max-md:ml-2.5">
                Stay up to date
            </div>
            {" "}
            <div
                className="bg-white flex w-[255px] max-w-full items-center justify-between gap-5 ml-20 mt-6 px-3 py-3 rounded-lg max-md:ml-2.5">
                <div className="text-black text-sm leading-6 grow whitespace-nowrap my-auto">
                    Your email address
                </div>
                {" "}
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd4c020fc588f19533c1cca7b0287a51a1403ef3198ffe8fffc0f2401605f8b?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full cursor-pointer"
                />
            </div>
            {" "}
            <div
                className="items-stretch flex w-[255px] max-w-full gap-4 ml-20 mt-10 mb-3.5 pr-20 max-md:ml-2.5 max-md:pr-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/70200ba35c612e4216470613a1eea15417aeefc19add86160d0a5df7afc575a6?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c159a203d8120cfe4d22fdee6e954352b435a1f2b9cbdbff29d80d74be9d4bbc?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/104fa942a60ea81606007b6afb6d37ba5b6effafb664cee15917658b886e6a01?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f4ceb0540020db0f1d53918e57d09dcd58b91f9e6f4c4dc476aa00a36c7a011?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
            </div>
        </footer>
    )
}