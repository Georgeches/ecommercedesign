import './ProgressIndicator.css'

export default function ProgressIndicator(){
    return(
        <div className="container-fluid progress">
            <div className='progress-indicator'>
            <div className="step">
                <div className="icon">
                    <i className="bi bi-bag-check"></i>
                </div>
                <div className="text">Cart</div>
             </div>
             <div className="line"></div>
             <div className="step">
                <div className="icon">
                    <i className="bi bi-person-lines-fill"></i>
                </div>
                <div className="text">Contact</div>
             </div>
             <div className="line"></div>
             <div className="step">
                <div className="icon">
                    <i className="bi bi-credit-card-2-front"></i>
                </div>
                <div className="text">Payment</div>
             </div>
        </div>
        </div>
    )
}