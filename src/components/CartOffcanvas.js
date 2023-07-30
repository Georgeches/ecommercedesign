import './CartOffCanvas.css'

export default function CartOffcanvas(){
    return(
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasExampleLabel">Shopping cart</h4>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr/>
        <div className="offcanvas-body">
          <section>
            <div className="py-2">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-11">
          
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-start">
                        <div className="col-md-6 col-sm-12 image text-center mb-3">
                          <img
                            src="https://m.hng.io/catalog/product/9/6/962627_dark_green_1.jpg?io=PDP"
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <p className="lead fw-normal mb-2">Double-breasted bouclé tweed blazer</p>
                          <p><span className="text-muted">Size: </span>M</p>
                          <p><span className="text-muted">Color: </span>Dark Green</p>
                          <div className="d-flex order-quantity align-items-center">
                            <button className=" d-flex align-items-center btn btn-link text-dark text-decoration-none"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              -
                            </button>
            
                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              className="form-control" />
            
                            <button className="d-flex align-items-center btn btn-linktext-dark text-decoration-none"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              +
                            </button>
                          </div>
                          <p className="mb-0 mt-3 fw-normal">Ksh 10000</p>
                        </div>
                        <div className="col text-end">
                          <a href="#!" className="text-dark"><i style={{fontSize: "20px"}} className="bi bi-trash3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-start">
                        <div className="col-md-6 col-sm-12 image text-center mb-3">
                          <img
                            src="https://m.hng.io/catalog/product/9/5/957727_bright_green_1.jpg?io=PDP"
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <p className="lead fw-normal mb-2">Pleated open-back taffeta midi dress</p>
                          <p><span className="text-muted">Size: </span>M</p>
                          <p><span className="text-muted">Color: </span>Green</p>
                          <div className="d-flex order-quantity align-items-center">
                            <button className=" d-flex align-items-center btn btn-link text-dark text-decoration-none"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              -
                            </button>
            
                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              className="form-control" />
            
                            <button className="d-flex align-items-center btn btn-linktext-dark text-decoration-none"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              +
                            </button>
                          </div>
                          <p className="mb-0 mt-3 fw-normal">Ksh 20000</p>
                        </div>
                        <div className="col text-end">
                          <a href="#!" className="text-dark"><i style={{fontSize: "20px"}} className="bi bi-trash3"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg text-light">Proceed to Pay</button>
                  </div>
          
                </div>
              </div>
              </section>
            </div>
        </div>
    )
}