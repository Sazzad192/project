import Image from "next/image";
import Button from "./Button";
import { User } from "./svg/icons";

function getYouTubeVideoId(url) {
  try {
    const urlObj = new URL(url);
    let videoId = "";

    if (urlObj.hostname === "youtu.be") {
      // Handle short URL like https://youtu.be/VIDEO_ID
      videoId = urlObj.pathname.slice(1);
    } else if (urlObj.searchParams.get("v")) {
      // Handle standard YouTube URL with v=VIDEO_ID parameter
      videoId = urlObj.searchParams.get("v");
    } else {
      const paths = urlObj.pathname.split("/");
      videoId = paths[paths.length - 1];
    }

    return videoId;
  } catch (error) {
    // If URL is invalid, assume it's just a video ID
    return url;
  }
}

export default function CourseCard({ key, item }) {
  const video = getYouTubeVideoId(item.videoLink);
  return (
    <div
      key={key}
      className="flex flex-col min-w-[413px] h-[510px] rounded-2xl shadow-lg bg-white text-[#2C2C2C]"
    >
      <div className="rounded-t-xl overflow-hidden">
        <iframe
          id="video"
          width="100%"
          height="240"
          src={`https://www.youtube.com/embed/${video}`}
          title={item.teacherName}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-7">
        <p className="text-xl font-bold text-left">{item.courseName}</p>
        <div className="mt-5">
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-start items-center gap-3">
              <Image
                src={item.img}
                alt={item.courseName}
                width={41}
                height={41}
                className="w-[41px] h-[41px] rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-lg font-semibold text-[#2C2C2C]">
                  {item.teacherName}
                </p>
                <p className="text-sm font-normal text-gray-600">{item.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-[26px] h-[27px]" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-medium text-[#2C2C2C]">{item.participant}</p>
                <p className="text-gray-500 text-xs font-medium">Participant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-10">
          <Button
            variant="green"
            className="rounded-lg py-3 px-6 text-xs font-semibold"
          >
            Buy Now
          </Button>
          <div>
            <p className="text-2xl font-semibold">${item.price}</p>
            <p className="text-xs font-normal text-gray-500">
              /{item.videos} videos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}