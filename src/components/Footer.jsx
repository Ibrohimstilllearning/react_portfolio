const Footer = () => {
    return (
    <div className="mt-32 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Proyek</a>
            <div className="flex items-center gap-3">
                <a href="">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="">
                    <i className="ri-youtube-fill ri-2x"></i>
                </a>
            </div>
        </div>
    </div>
    );
}