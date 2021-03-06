export default function throttle(delay, fn) {
    let lastCall = 0;
    return function (...args) {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            console.log(delay);
            return;
        }
            
        lastCall = now;
        return fn(...args);
    }
}
