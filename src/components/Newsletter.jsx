import './Newsletter.css'

function Newsletter() {
    return (
        <div className="newsletter">
            <span>Receba ofertas, descontos exclusivos e fique por dentro de todas novidades</span>
            <div className='email'>
                <input required type="email" placeholder="Email"></input>
                <button className='btn-enviar'>Enviar</button>
            </div>
        </div>
    )
}

export default Newsletter