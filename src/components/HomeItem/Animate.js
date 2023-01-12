
const easing = {
    // need other function : tube 9 : 45 
    linear : (t) => t,
    easeInQuad : t => t*t,
    easeOutQuad : t => t*(2-t),
    easeInOutCubic : (t) => 
    t < 0.5 ? 4 * t * t * t : (t-1) * (2 * t -2) * (2 * t -2) + 1
}


function getValue (start, end , elapsed, duration, easeMethod) {
    if(elapsed > duration) return end;
    return start + (end - start) * easing[easeMethod](elapsed / duration ); 
}

const Animate = ({
    fromValue,
    toValue,
    onUpdate,
    onComplete,
    duration = 600,
    easeMethod = "liner"
}) => {
    const startTime = performance.now;

    const tick = () => {
        const elapsed = performance.now - startTime;

        window.requestAnimationFrame(() => {
            return onUpdate(
                getValue(fromValue, toValue, elapsed, duration, easeMethod),
                //callback
                elapsed <= duration ? tick : onComplete
            )
        })
    };
    return (
        <>
        
        </>
    );
}
 
export default Animate;