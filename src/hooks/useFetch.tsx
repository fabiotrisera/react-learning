import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .catch((error) => setError(error))
            .then((response) => response?.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
        
        return () => {
            setData(null);
            setIsLoading(false);
        };
    }, [url]);

    return { data, error, isLoading };
}