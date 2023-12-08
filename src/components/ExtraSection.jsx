export function ExtraSection() {
    return (
        <>
            <img alt={"background-side-image"}
                 loading="lazy"
                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/682287bb12f3302e9795ec373e3c56b38a38a007188fda3f4a29173b8e19b97e?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                 className="aspect-[0.35] object-contain object-center w-[50px] overflow-hidden max-w-full mt-5 self-start"
            />
            <div className="flex-col overflow-hidden self-stretch relative flex min-h-[465px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
                <img
                    alt={"brown-background"}
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23af499fd0c0326243dfbaf4f2c80344ed97a648386e0667f3a63c23fd8ed57d?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative bg-red-100 flex w-[768px] max-w-full flex-col justify-center items-center mt-16 mb-11 px-16 py-11 max-md:my-10 max-md:px-5">
                    <div className="flex w-[504px] max-w-full flex-col items-stretch">
                        <div className="text-gray-800 text-center text-5xl font-medium leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                            Didn’t find the position you’re looking for?
                        </div>{" "}
                        <div className="text-red-600 text-lg leading-7 whitespace-nowrap mt-5 max-md:max-w-full">
                            <span className="text-gray-800">Drop a mail at </span>
                            <span className="text-red-600">hr@international.com</span>
                            <span className="text-gray-800"> and we’ll get back to you!</span>
                        </div>
                    </div>
                </div>
            </div>{" "}

        </>
    )
}