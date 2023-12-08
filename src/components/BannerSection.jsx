export function BannerSection() {
    return (
        <div
            className="items-center self-center flex w-full max-w-[1248px] flex-col justify-center mt-24 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[704px] max-w-full flex-col items-center">
                <div
                    className="text-gray-800 text-center text-5xl font-medium leading-[64px] whitespace-nowrap max-md:text-4xl max-md:leading-[57px]">
                    Our Culture
                </div>
                <div className="text-neutral-700 text-center text-xl leading-8 self-stretch mt-4 max-md:max-w-full">
                    At Ventura we don't just want to fill jobs; we want to partner with
                    people. We want to recruit unique individuals who share our values.
                </div>
            </div>
        </div>
    )
}