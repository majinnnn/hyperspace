import React from "react";

const Home: React.FC = () => {
  return (
    <main
      style={{
        WebkitBoxReflect:
          "below -50px linear-gradient(transparent, rgba(0, 0, 0, .2))",
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
    >
      <header className="bg-cosmic-gradient text-white py-10">
        <h1 className="text-3xl text-center">Welcome to My Next.js App</h1>
        <p className="text-center mt-6">
          Explore creative animations, Next.js App Routing, and the cosmic
          revolution
        </p>
      </header>

      <div className="my-32">
        <section className="text-center">
          <p className="text-xl mx-16 leading-10">
            This app demonstrates the power of Next.js, Tailwind CSS, and
            creative animations using Three.js and CSS for the cosmic
            HyperSpace.
          </p>
        </section>
      </div>

      <footer className="bg-cosmic-gradient text-white py-4">
        <p className="text-center">
          Created with ❤️ using Next.js and Tailwind CSS for the outerspace
        </p>
      </footer>
    </main>
  );
};

export default Home;
