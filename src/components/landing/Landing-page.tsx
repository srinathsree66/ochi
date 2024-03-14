function Landingpage() {
    return (
        <>
            <section className='w-full h-screen pt-1'>
                <header className='textstructure mt-40 px-20'>
                    {['We create', 'Eye Opening', 'Presentations'].map(
                        (item, index) => (
                            <div className='masker'>
                                <div className='w-fit flex items-center'>
                                    {index === 1 && (
                                        <div className='w-[9vw] h-[5vw]'>
                                            <img
                                                src='src/assets/content-image01.jpg'
                                                alt='image'
                                            />
                                        </div>
                                    )}
                                    <h1
                                        className=" flex items-center font-['FoundersGrotesk'] uppercase text-[7.5vw]
                                    tracking-tighter font-semibold leading-[6vw]"
                                        key={index}
                                    >
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        )
                    )}
                </header>
                <div className='border-t-[1px] border-zinc-500 mt-24 flex justify-between items-center py-5 px-20'>
                    {[
                        'For public and private companies',
                        'From the first pitch to IPO',
                    ].map((item, index) => (
                        <p
                            className='text-md font-normal tracking-tight leading-none'
                            key={index}
                        >
                            {item}
                        </p>
                    ))}
                    <div className='start flex gap-5'>
                        <button className='px-5 py-2 border-[2px] border-zinc-500 font-light rounded-full uppercase'>
                            Start the project
                        </button>
                        <div className='mt-1'>
                            <svg
                                className='border-[2px] border-zinc-900 rounded-full'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                height='32'
                                width='32'
                            >
                                <path d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'></path>
                            </svg>
                            {/* <svg
                                className='border-[2px] border-zinc-900 rounded-full'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='32'
                                height='32'
                                fill='currentColor'
                            >
                                <path d='M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z'></path>
                            </svg> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landingpage;
