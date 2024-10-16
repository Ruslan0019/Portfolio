import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-darkBackground text-color">
      <h1 className="text-9xl  font-bold text-transparent bg-clip-text text-white  mb-4 swing ">
        404
      </h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info text-center">
        <p className="text-lg">
          We can&apos;t find that page. We&apos;re fairly sure that page used to be here, but it
          seems to have gone missing.
        </p>
        <Link
          title="Home"
          alt="Home"
          href="/"
          className="mt-8 inline-block bg-border text-button-color px-16 py-4 rounded-full uppercase font-semibold text-sm tracking-wide  transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased  "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
