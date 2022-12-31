import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    // useState variable and function is set to false.
    const [matches, setMatches] = useState(false);

    // useEffect use to check if the viewport matches with the value entered
    useEffect(() => {

        const media = window.matchMedia(query);

        // if the value is not match it switches for each breakpoint.
        if(media.matches !== matches) {
            setMatches(media.matches);
        }

        const listner = () => setMatches(media.matches);
        window.addEventListener('resize', listner);// resize each time the listner fire/touches breakpoint.
        return () => window.removeEventListener('resize', listner);
        //pass the dependency need in square brackets.
    }, [matches, query]);
    //Returns the match value for the specfic breakpoint
    return matches;
}
 
export default useMediaQuery;

// Reference code -> https://fireship.io/snippets/use-media-query-hook/