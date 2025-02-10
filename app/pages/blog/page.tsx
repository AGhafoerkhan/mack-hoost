"use client";
import { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";

const InstagramFeed = () => {
    const feedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!feedRef.current) return;

        const feed = new Instafeed({
            accessToken: "IGAAHcN5Mv3oRBZAE9pUGNra0FRZA21pX0xrMTQtZAEEtdkJuTld4ZAnFjT0cxLXhvNHNnR3Y2M00yd2QxY3BnOGplbDNSZAFVoaTVna1JwVDItdW5aX2ZAxZATJGLWliVzlhOHZAnSU14QUFzZAjVRd3Jud0FSOWM1MklYY3F4NlliZAEUtRQZDZD",
            target: feedRef.current,
            limit: 6,
            template: `
        <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center mt-5 mb-5">
          <div class="card bg-white text-dark border-0" style="width: 400px;">
            <div class="ratio ratio-1x1">
              {{#if image}}
                <img src="{{image}}" class="card-img-top" alt="{{caption}}"/>
              {{/if}}
              {{#if video}}
                <video src="{{video}}" class="card-img-top" autoplay loop muted></video>
              {{/if}}
            </div>
            <div class="card-body text-center">
              <p class="card-text">{{caption}}</p>
            </div>
          </div>
        </div>
      `,
        });

        feed.run();
    }, []);

    return <div ref={feedRef} className="row justify-content-center g-4" />;
};

export default function BlogPage() {
    return (
        <div className="container-fluid bg-dark text-light">
            <h1 className="mb-4 text-center">  Blog </h1>
            <InstagramFeed/>
        </div>
    );
}
