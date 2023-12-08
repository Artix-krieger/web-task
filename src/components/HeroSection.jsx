export function HeroSection() {
    return (
        <div className="bg-stone-50 self-stretch z-[1] flex w-full flex-col justify-center items-stretch max-md:max-w-full">
            <div className="flex-col overflow-hidden relative flex min-h-[474px] w-full pr-16 py-12 items-start max-md:max-w-full max-md:pr-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c8fd1240318059a149496b2f81a7861d20591507203f6720148e9ae4ecb4e97?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-red-100 flex w-[730px] max-w-full flex-col mt-14 px-20 py-12 items-start max-md:mt-10 max-md:px-5">
                    <div className="text-gray-800 text-6xl font-bold leading-[70px] w-[495px] max-w-full mt-2.5 max-md:text-4xl max-md:leading-[52px]">
                        Careers
                    </div>
                    <div className="text-neutral-700 text-xl leading-8 w-[464px] max-w-full mt-6">
                        It takes a dream to create a successful business idea. It takes
                        people to make dreams a reality. Could you be one of those people?
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b32023a4d7ce4442413207ff4a9c186b0efd0f95fae3f5c66556db4fec3be2?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="aspect-square object-contain object-center w-[60px] overflow-hidden max-w-full self-end"
                />
            </div>
        </div>

    )
}