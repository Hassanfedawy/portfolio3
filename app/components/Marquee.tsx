import { cn } from "@/lib/utils";
import Marquee from "../../components/ui/marquee";

const reviews = [
  {
    body: "Next.JS",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    body: "Tailwind.css",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    body: "Redux",
    img: "https://avatar.vercel.sh/john",
  },
  {
    body: "HTML",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "CSS",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "TypeScript",
    img: "https://avatar.vercel.sh/james",
  },
  {
    body: "FramerMotion",
    img: "https://avatar.vercel.sh/james",
  },
  {
    body: "React.JS",
    img: "https://avatar.vercel.sh/james",
  },
  {
    body: "JavaScript",
    img: "https://avatar.vercel.sh/james",
  },
];



const ReviewCard = ({
  img,
  body,
}: {
  img: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        " cursor-pointer w-60 overflow-hidden rounded-xl border p-4",
        // light styles
        "bg-black hover:bg-gray-800 text-white"
        
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
      </div>
      <blockquote className="mt-2 text-md font-semibold text-center">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="my-10 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s] ">
        {reviews.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
     
    </div>
  );
}
