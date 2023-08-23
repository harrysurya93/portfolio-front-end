import { useInView } from 'react-intersection-observer';
import '../layout/Animation.css';

const LeftSlideAnimation = ( {children} ) => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
             <div ref={ref}>   
               { inView && <div className="slideFromLeft">{children}</div> }
             </div>
          )
}

export default LeftSlideAnimation;