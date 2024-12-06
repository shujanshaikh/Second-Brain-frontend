import { Shareicon } from "../Icons/Shareicon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-100 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center font-sm">
            <div className="text-gray-500 pr-2">
              <Shareicon />
            </div>
          {title}
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500" >
              <a href={link} target="_blank">
              <Shareicon />
              </a>
             
            </div>
            <div className="text-gray-500">
              <Shareicon />
            </div>
          </div>
        </div>
        <div className="pt-4 ">
          {type === "youtube" && <iframe
            className="w-full rounded-md"
            src={link.replace("watch" , "embed").replace("?v=" , "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>}
          
          {type === "twitter" && <blockquote className="twitter-tweet">
  <a href={link.replace("x.com" , "twitter.com")}></a> 
</blockquote>}
          
        </div>
      </div>
    </div>
  );
}
