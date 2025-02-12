type MediaType = "IMAGE" | "VIDEO";

interface InstagramPost {
    caption: string;
    id: string;
    media_type: MediaType;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;  // Optional, only for videos
    timestamp: string;
    username: string;
}

interface Paging {
    cursors: {
        before: string;
        after: string;
    };
}

interface InstagramAPIResponse {
    data: InstagramPost[];
    paging: Paging;
}
