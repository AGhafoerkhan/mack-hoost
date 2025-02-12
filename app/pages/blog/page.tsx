"use client";
import { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";
import {InstagramFeedResponse} from "@/app/instafeed";

const fetchInstagramFeed = async (): Promise<InstagramFeedResponse> => {
    const response = await fetch("IGAAHcN5Mv3oRBZAE9pUGNra0FRZA21pX0xrMTQtZAEEtdkJuTld4ZAnFjT0cxLXhvNHNnR3Y2M00yd2QxY3BnOGplbDNSZAFVoaTVna1JwVDItdW5aX2ZAxZATJGLWliVzlhOHZAnSU14QUFzZAjVRd3Jud0FSOWM1MklYY3F4NlliZAEUtRQZDZD");
    const data: InstagramFeedResponse = await response.json();
    return data;
};

fetchInstagramFeed().then((data) => console.log(data.data));


export default function BlogPage() {
    return (
        <div className="container-fluid bg-dark text-light">

        </div>
    );
}







