
function getValue (fromValue, toValue, elapsed, duration, easeMethod) {
    // if(elapsed > duration) return end;
    // 9 : 46 part4
    // return start + (end - start) & 
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