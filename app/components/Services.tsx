import OrbitingCircles from "@/components/ui/orbiting-circles";

export function Services() {
  return (
    <div id="Service" className="flex flex-col lg:flex-row gap-4 items-center p-5 bg-gray-700 my-12 text-white">
      <div className="text-center lg:text-left">
        <h4 className='text-lg text-orange-400'>Services</h4>
        <h2 className='text-4xl font-bold'>Think Design Develop Optimize Launch</h2>
      </div>

      <div className="relative flex h-[500px] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-950 md:shadow-xl my-10">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Services
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none"
          duration={20}
          delay={20}
          radius={80}
        >
          <Icons.Think />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Icons.Design />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.Develop />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Icons.Optimize />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={240}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.Launch />
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icons = {
  Think: () => (
    <p className="font-bold">Think</p>
  ),
  Design: () => (
    <p className="font-bold">Design</p>
  ),
  Develop: () => (
    <p className="font-bold">Develop</p>
  ),
  Optimize: () => (
    <p className="font-bold">Optimize</p>
  ),
  Launch: () => (
    <p className="font-bold">Launch</p>
  ),
};
