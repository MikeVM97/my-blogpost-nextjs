import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto profile-image"
        src="/images/profile.jpg"
        height={200}
        width={200}
        alt="Maycol Vivanco"
        priority={true}
      />
    </section>
  );
}
