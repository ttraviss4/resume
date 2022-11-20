import profilePic from "../assets/profilePic.jpeg";

export const Header = () => {
  return (
    <header className="bg-[url('/src/assets/headerPicBW.jpeg')] bg-cover flex relative items-center py-4 w-full md:rounded-t-md">
      <img
        className="flex rounded-full object-cover h-20 md:h-28 ml-10 ring-4 ring-gray-500"
        src={profilePic}
        alt="Profile Pic"
      />
      <div className="flex flex-col mr-10 w-full items-end">
        <b className="text-4xl text-white">Taylor Traviss</b>
        <b className="text-2xl text-white">Full-Stack Software Engineer</b>
      </div>
    </header>
  );
};
