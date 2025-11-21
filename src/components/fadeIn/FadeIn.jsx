import { useEffect, useRef, useState } from "react";
import { FadeWrapper } from "./FadeInStyled";

export default function FadeIn({children}){
    const domRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting){
                setVisible(true);
                observer.unobserve(entries[0].target)
            }
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) observer.unobserve(currentElement)
        };
    }, []);

    return (
    <FadeWrapper ref={domRef} $isVisible={isVisible}>
      {children}
    </FadeWrapper>
  );
    
}