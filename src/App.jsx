import DataImage from "./data";
function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
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
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 transition"
            >
              Download CV
            </a>
            <a href="#">Lihat Proyek</a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500] ml-auto"
        />
      </div>
    </>
  );
}

export default App;
