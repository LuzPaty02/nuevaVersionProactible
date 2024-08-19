import React from "react";

export default function VideoEmbed() {
    return( 
        <iframe
          width="100%" // Adjusted for responsive design
          height="100%" // Height adjusted for responsive design
          src="https://www.youtube.com/embed/FYLRWGH0eO8"
          title="Conectad@s: Proactivle | Capítulo 01 | #SoyMéxico"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
    )
}