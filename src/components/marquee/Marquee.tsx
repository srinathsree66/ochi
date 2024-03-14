import { motion } from 'framer-motion';

function Marquee() {
    return (
        <section className='w-full bg-[#004D43] py-20 text-white rounded-3xl'>
            <div className='border-t-2 border-b-2 border-zinc-300 whitespace-nowrap flex gap-10 overflow-hidden'>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className="text-[22vw] leading-none font-['FoundersGrotesk'] uppercase font-semibold -mt-6 -mb-6"
                >
                    We are ochi
                </motion.h1>
                {/* <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className="text-[20vw] leading-none font-['FoundersGrotesk'] uppercase font-semibold"
                >
                    We are ochi
                </motion.h1>
                 */}
            </div>
        </section>
    );
}

export default Marquee;
