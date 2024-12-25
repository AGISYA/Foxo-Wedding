import Head from "next/head";

export default function Footer() {
  return (
    <div>
      <Head>
        <title>Foxo Wedding</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-serif flex flex-col">
            <span className="font-bold">foxo wedding</span>
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Privacy & Policy
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
