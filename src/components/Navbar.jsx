export function Navbar() {
    return (
        <nav className="shadow-sm bg-red-100 self-stretch flex w-full items-stretch justify-between gap-5 px-8 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="bg-zinc-300 flex w-[237px] shrink-0 h-[55px] flex-col" />
            <div className="flex items-start justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-stretch self-center flex gap-1 my-auto">
                    <div className="text-neutral-700 text-lg font-medium tracking-tight grow whitespace-nowrap">
                        Company
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a9423cea3cb05ef141e887773daac4626bc2686ea90546b61088037c362229?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                    />
                </div>
                <div className="items-stretch self-center flex gap-1 my-auto">
                    <div className="text-neutral-700 text-lg font-medium tracking-tight grow whitespace-nowrap">
                        Solutions For All
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a9423cea3cb05ef141e887773daac4626bc2686ea90546b61088037c362229?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                    />
                </div>
                <div className="items-stretch self-center flex gap-1 my-auto">
                    <div className="text-neutral-700 text-lg font-medium tracking-tight grow whitespace-nowrap">
                        Products
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a9423cea3cb05ef141e887773daac4626bc2686ea90546b61088037c362229?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                    />
                </div>
                <div className="items-stretch self-center flex gap-1 my-auto">
                    <div className="text-neutral-700 text-lg font-medium tracking-tight grow whitespace-nowrap">
                        More
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a9423cea3cb05ef141e887773daac4626bc2686ea90546b61088037c362229?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                    />
                </div>
                <div className="text-neutral-700 text-lg font-medium tracking-tight self-center my-auto">
                    Contact Us
                </div>
                <div className="text-red-600 text-center text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border bg-stone-50 self-stretch grow px-6 py-3.5 rounded-md border-solid border-red-600 max-md:px-5">
                    Book Free Consultation
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf8906f810d513c07a21fcc72b251a6faab79325721d50082ae34837d26e88a?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
        </nav>

    )
}