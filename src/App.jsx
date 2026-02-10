import DataImage from "./data";
import { listTools, listProyek } from "./data";
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
              loading="lazy"
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
          loading="lazy"
        />
      </div>
     
      {/* About */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Ibrohim, seorang pengembang web dan aplikasi
          mobile dengan pengalaman lebih dari 2 tahun. Saya memiliki keahlian dalam membangun aplikasi web menggunakan React dan pengembangan aplikasi mobile dengan Flutter. Selain itu, saya juga berpengalaman dalam menggunakan Laravel untuk manajemen database. Saya sangat antusias dalam menciptakan solusi digital yang inovatif dan efisien.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="About Image" className="w-12 rounded-md sm:block hidden" />
          <div className="flex items-center gap-6">
            <h1 className="text-4xl mb-1">
              20<span className="text-violet-500">+</span>
            </h1>
            <p>Proyek Selesai</p>
          </div>
          <div>
            <h1 className="text-4xl mb-1">
              2<span className="text-violet-500">+</span>
            </h1>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
         </div>
      </div>
       <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools/Bahasa yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut adalah beberapa tools dan bahasa pemrograman yang saya kuasai:</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* About END */}

      {/* Project */}
      
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut adalah beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 ">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project END */}

      {/* Contact */}

      <div className="kontak mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Let's Connect</p>
        <form  action="https://formsubmit.co/ibrohimstilllearning@gmail.com" method="POST"className="bg-zinc-800 p-10 w-fit mx-auto rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-6">
              <label className="font-semibold" htmlFor="">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email...." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-6">
              <label className="font-semibold" htmlFor="">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required>
              </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Send</button>
            </div>
          </div>
        </form>
      </div>

      {/* Contact END */}
    </>
  );
}

export default App;
