export default function VideoEmbed({ url }) {
    return (
        <div className="relative w-full h-0 pb-[56.25%] sm:pb-[75%] md:pb-[56.25%] overflow-hidden">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md sm:shadow-lg"
                src={url}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}
