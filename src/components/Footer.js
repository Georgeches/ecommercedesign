import './Footer.css'

export default function Footer(){
    return(
        <footer className="my-3 container text-center text-lg-start bg-light text-muted">
            <section className="">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4 my-5 me-lg-5">
                    <div className="form-outline text-start text-dark">
                        <p className="lead display-12">Sign up for our newsletter</p>
                        <form>
                            <input type="email" id="subscribe" spellCheck="false" placeholder="example@gmail.com" className="form-control border-0 shadow-sm" />
                            <button type="submit" className="btn btn-warning text-light bt-lg mb-4 mt-4">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    </div>

                    <div className="text-start text-dark col-lg-6 my-5">
                    <h2 className="text-center text-dark">Any questions?</h2>
                    <p className="lead text-center text-dark">Fill the form to message us</p>
                    <form>
                        <label for="name" className="form-label">Name</label>
                        <input type="text" spellCheck="false" className="form-control mb-4 border-0 shadow-sm" placeholder="e.g Matia" id="name"/>

                        <label for="email" className="form-label">Email</label>
                        <input type="email" spellCheck="false" className="form-control border-0 shadow-sm" placeholder="e.g matia@example.com" id="email"/>

                        <label for="message" className="form-label mt-4">Message</label>
                        <textarea style={{height: "200px"}} spellCheck="false" className="form-control border-0 shadow-sm" placeholder="Your message or query" id="name"></textarea>
                        <button className='btn btn-warning mt-3 text-white send-btn'>Send</button>
                    </form>
                    </div>
                    
                </div>
            </section>

            <hr/>

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>
                <div>
                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#3b5998"}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-facebook"></i></a>

                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#55acee"}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-twitter"></i></a>

                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#ff1010"}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-instagram"></i></a>

                <a
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#0a9d25"}}
                    href="#!"
                    role="button"
                    ><i className="bi bi-whatsapp"></i></a>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#">matia.com</a>
            </div>
        </footer>
    )
}