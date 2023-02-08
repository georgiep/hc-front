import { useState, useEffect } from "react";

export default function useIntersection(ref, threshold = 0.5, oneTime) {
    const [isIntersected, setIsIntersected] = useState(false);
    useEffect(
        () => {
            if (ref.current) {
                const ob = new IntersectionObserver(
                    ([entry], observer) => {
                        if (entry.intersectionRatio >= threshold) {
                            setIsIntersected(true);
                        } else {
                            setIsIntersected(false);
                        }
                        if(oneTime){
                            if (entry.isIntersecting) observer.unobserve(ref.current)
                        }
                    },
                    { threshold, rootMargin: '1000px' }
                );
                ob.observe(ref.current);

                return () => {

                    if(ref.current){
                        ob.unobserve(ref.current);
                    }

                };
            }
        },
        [ref.current, threshold]
    );
    return isIntersected;
}