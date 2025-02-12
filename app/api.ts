const fetchInstagramData = async (): Promise<InstagramAPIResponse> => {
    const response = await fetch("https://your-api-url.com/endpoint");
    if (!response.ok) {
        throw new Error("Failed to fetch Instagram data");
    }
    const data: InstagramAPIResponse = await response.json();
    return data;
};
