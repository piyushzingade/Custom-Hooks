import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the value changes before the delay has passed
        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
};