import './Allproducts.css'

export default function Allproducts(){
    return(
        <div className="container allproducts d-flex justify-content-center">
            <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <a href='/viewproduct'><img className="img-fluid" src="https://m.hng.io/catalog/product/9/6/962627_dark_green_1.jpg?io=PDP" alt=""/></a>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Bouclé tweed blazer</p>
                  <p className="fw-light mb-2">Ksh 10000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>

          <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <img className="img-fluid" src="https://m.hng.io/catalog/product/9/5/957727_bright_green_1.jpg?io=PDP" alt=""/>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Pleated taffeta midi dress</p>
                  <p className="fw-light mb-2">Ksh 20000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>

          <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <img className="img-fluid" src="https://m.hng.io/catalog/product/9/5/955674_red_1.jpg?io=PDP" alt=""/>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Stretch-silk satin top</p>
                  <p className="fw-light mb-2">Ksh 15000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>

          <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <img className="img-fluid" src="https://m.hng.io/catalog/product/9/5/958851_black_1.jpg?io=PDP" alt=""/>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Panther draped midi skirt</p>
                  <p className="fw-light mb-2">Ksh 40000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>

          <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <img className="img-fluid" src="https://m.hng.io/catalog/product/9/5/951853_navy_1.jpg?io=PDP" alt=""/>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Oceane satin midi dress</p>
                  <p className="fw-light mb-2">Ksh 50000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>

          <div className="card style-card my-2 border-0">
            <div className="card-body p-0 bg-light">
              <img className="img-fluid" src="https://m.hng.io/catalog/product/9/5/954471_green_1.jpg?io=PDP" alt=""/>
              <div className="product-details d-flex justify-content-between align-items-start mt-3 container text-start">
                <div>
                  <p className=" fw-normal mb-2">Karina Tuck midi dress</p>
                  <p className="fw-light mb-2">Ksh 45000</p>
                </div>
                <i className="bi bi-bag-plus" style={{fontSize: "25px"}}></i>
              </div>
            </div>
          </div>
        </div>
    )
}