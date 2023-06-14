import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Sporty Smash | ${title}`;
    }, [title]);
};

export default useTitle;