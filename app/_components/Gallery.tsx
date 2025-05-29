import Link from "next/link";
import CreationCard from "./CreationCard";

export default function Gallery() {
  const creations = [
    {
      id: 1,
      label: "DEEP EARTH",
      mobileImage: "/image-deep-earth.jpg",
      desktopImg: "/image-deep-earth-mobile.jpg",
    },
    {
      id: 2,
      label: "NIGHT ARCADE",
      mobileImage: "/image-night-arcade-mobile.jpg",
      desktopImg: "/image-night-arcade.jpg",
    },
    {
      id: 3,
      label: "SOCCER TEAM VR",
      mobileImage: "/image-soccer-team-mobile.jpg",
      desktopImg: "/image-soccer-team.jpg",
    },
    {
      id: 4,
      label: "THE GRID",
      mobileImage: "/image-grid-mobile.jpg",
      desktopImg: "/image-grid.jpg",
    },
    {
      id: 5,
      label: "FROM UP ABOVE VR",
      mobileImage: "/image-from-above-mobile.jpg",
      desktopImg: "/image-from-above.jpg",
    },
    {
      id: 6,
      label: "POCKET BOREALIS",
      mobileImage: "/image-pocket-borealis-mobile.jpg",
      desktopImg: "/image-pocket-borealis.jpg",
    },
    {
      id: 7,
      label: "THE CURIOSITY",
      mobileImage: "/image-curiosity-mobile.jpg",
      desktopImg: "/image-curiosity.jpg",
    },
    {
      id: 8,
      label: "MAKE IT FISHEYE",
      mobileImage: "/image-fisheye-mobile.jpg",
      desktopImg: "/image-fisheye.jpg",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center font-josefin">
      <div className="w-[90%] flex flex-col my-32">
        <div className="flex items-center justify-center md:justify-between mb-8 ">
          <h2 className="text-5xl ">Our Creations</h2>
          <Link
            href="/gallery"
            className="hidden md:block border-2 border-black/60 hover:text-white hover:bg-black px-10 py-3"
          >
            SEE ALL
          </Link>
        </div>

        <ul className="w-full flex flex-wrap justify-between gap-x-10 gap-y-12">
          {creations.map((item) => (
            <CreationCard
              key={item.id}
              mobileImage={item.mobileImage}
              imageDesktop={item.desktopImg}
              label={item.label}
            />
          ))}
        </ul>

        <Link
          href="#"
          className="md:hidden border-2 border-black/60 hover:text-white hover:bg-black px-10 py-3 mx-auto my-10"
        >
          SEE ALL
        </Link>
      </div>
    </section>
  );
}
