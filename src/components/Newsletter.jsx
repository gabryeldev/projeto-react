import './Newsletter.css'

function Newsletter() {
    return (
        <div className="newsletter">
            <span>Receba ofertas, descontos exclusivos e fique por dentro de todas novidades</span>
            <div className='email'>
                {/* <input required type="email" placeholder="Email"></input>
                <button className='btn-enviar'>                    
                    <svg x="0px" y="0px" width={20}
                        viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                        <path d="M64,1.7L0,26.4L15,38l3.6,24l13-11.8l15.6,11.1L64,1.7z M17.7,35L8,27.6l40.2-15.5L17.7,35z M20.8,49.8l-1.6-10.9l25.4-19.1
                            L23.3,42.9L20.8,49.8z M24.6,51.2l1.7-4.8l2,1.4L24.6,51.2z M28.5,43.1l28.3-30.6l-12,42.2L28.5,43.1z"/>
                    </svg>
                </button> */}
                
                <div className="email-box">
                    <input type="text" placeholder="Email" className="email-input"/>
                    <svg
                     width={30}
                     height={30}
                     viewBox="-10 0 152.88 71.51">
                        <path d="M122.88,58.27l-23,23.24V69.93c-14.54-3-26,.31-34.76,11.37,1.51-22.75,17.06-33.73,34.76-34.46V35l23,23.23ZM6.68,0h93.6a6.54,6.54,0,0,1,2.54.51A6.72,6.72,0,0,1,105,2a6.65,6.65,0,0,1,2,4.72V26.4a.62.62,0,0,1-.62.62.66.66,0,0,1-.48-.22,9.31,9.31,0,0,0-2-1.61,9.77,9.77,0,0,0-2.36-1,.63.63,0,0,1-.45-.59V9.86L70.92,35.55l5.49,5.76a.63.63,0,0,1,0,.87l-.16.1c-.68.37-1.36.75-2,1.15s-1.32.82-2,1.26a.61.61,0,0,1-.82-.12l-5-5.21-10.21,8.7a2.92,2.92,0,0,1-3.76,0L41.72,39.34,9.35,71.8H52.93a.61.61,0,0,1,.62.61l0,.19c-.17.74-.33,1.48-.47,2.22v0c-.14.73-.27,1.51-.39,2.32a.62.62,0,0,1-.61.52H6.68a6.59,6.59,0,0,1-2.55-.51A6.83,6.83,0,0,1,2,75.72,6.72,6.72,0,0,1,.51,73.55v0A6.57,6.57,0,0,1,0,71V6.68A6.63,6.63,0,0,1,.51,4.13,6.83,6.83,0,0,1,2,2,6.94,6.94,0,0,1,4.13.51,6.59,6.59,0,0,1,6.68,0ZM5.89,67,37.15,35.61,5.89,10.12V67ZM10,5.89,54.29,42,96.69,5.89Z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Newsletter