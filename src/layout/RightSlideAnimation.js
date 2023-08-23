import { useInView } from 'react-intersection-observer';
import '../layout/Animation.css';

const RightSlideAnimation = ( {children} ) => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
             <div ref={ref}>   
               { inView && <div className="slideFromRight">{children}</div> }
             </div>
          )
}

export default RightSlideAnimation;