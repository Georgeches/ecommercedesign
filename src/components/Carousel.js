import './Carousel.css'

export default function Carousel(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            { /** </div><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> */}
            
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://media.istockphoto.com/id/1202125485/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=YKAmeqcrq4-D9anvPsEXRlUxVqF7lCpUkjY0mXluVQM=" alt="..." />
                <div className="carousel-content container">
                </div>
            </div>        
            </div>
        </div>
    )
}