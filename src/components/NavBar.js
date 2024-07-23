// The Navigation Bar component

const NavBar = () => {
    return (
        <div className="container-fluid p-0">

            <nav class="navbar navbar-expand-md bg-primary-subtle p-4" data-bs-theme="dark">
                <div class="container-fluid justify-content-center">

                    <a class="navbar-brand h1" data-aos="fade-up" href="#">triet.ngo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item" data-aos="fade-up">
                                <a class="nav-link" aria-current="page" href="#"><i class="bi bi-person-circle"></i> About</a>
                            </li>

                            <li class="nav-item" data-aos="fade-up" data-aos-delay="50">
                                <a class="nav-link" href="https://github.com/trietngo" target="_blank"><i class="bi bi-github"></i> GitHub</a>
                            </li>

                            <li class="nav-item" data-aos="fade-up" data-aos-delay="100">
                                <a class="nav-link" href="https://www.linkedin.com/in/triet-ngo/" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
                            </li>

                            <li class="nav-item" data-aos="fade-up" data-aos-delay="150">
                                <a class="nav-link" href="https://trieticus.wordpress.com/" target="_blank"><i class="bi bi-wordpress"></i> WordPress</a>
                            </li>

                            <li class="nav-item" data-aos="fade-up" data-aos-delay="200">
                                <a class="nav-link" href="mailto:minhtriet2499@gmail.com"><i class="bi bi-envelope-at"></i> Contact</a>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
            
        </div>
        
        
        
    )
}

export default NavBar;