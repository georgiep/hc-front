import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    out: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    },
    in: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    },
};

const Transition = ({ children }) => {

    const { asPath } = useRouter()

    return (

            <div className="effect-1">
                <AnimatePresence
                    initial={false}
                    mode='wait'
                >
                    <motion.div
                        key={asPath}
                        variants={variants}
                        initial="in"
                        animate="inactive"
                        exit="out"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
                <style jsx global>
                    {`
                        .effect-1,.effect-2 {
                            overflow: hidden;
                        }
                    `}
                </style>
            </div>

    );
};

export default Transition;