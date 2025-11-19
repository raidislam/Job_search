import { motion } from "motion/react"
export default function Banner() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <motion.h1 
                    initial
                        animate={{
                            scale: [2, 1],
                            transition: {
                                duration: 2
                            }
                        }}
                    className="text-5xl font-bold">Welcome to Job Portal</motion.h1>
                     <motion.h1 
                        animate={{
                            scale: [2, 1],
                            transition: {
                                duration: 2
                            }
                        }}
                    className="text-5xl font-bold">Remote Jobs For You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    )
}
