import DataImage from "./data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <p>In Code, We Grow.👌</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Halo, Aku Ibrohim</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai sebuah ketertarikan dengan pengembangan website dan
            pemgembangan aplikasi android, yeng berfokus pada pengembangan
            website berbasis React dan Flutter untuk mobile-nya serta laravel
            untuk database. Saya tertarik pada bidang ini berlangsung selama 2
            tahun.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 transition"
            >
              Download CV <i className="ri-download-line"></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition ease-in">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500] md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
