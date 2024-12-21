import { Link } from "react-router-dom";

function Faqs () {
    return(
        <div className="flex flex-col justify-between">
            <div className="w-100 h-svh flex flex-col gap-10 items-start pl-10 pr-10 pt-10 bg-secondary">
                <h1 className="text-5xl text-center w-full border-b-2 p-2">FAQS</h1>
                <details className=" w-full">
                    <summary className="w-max text-xl">¿Quiénes somos?</summary>
                    <p>Somos un emprendimiento destinado a la venta y difusión de productos regionales cuyanos, tales como semillas, frutos secos, mermeladas, vinos, etc.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Dónde estamos ubicados?</summary>
                    <p>Nuestra dirección es Salta 1022 norte, San Juan, Argentina. También contamos con envíos a nivel nacional para que puedas disfrutar de nuestros productos donde sea que estés.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Qué productos ofrecemos?</summary>
                    <p>Ofrecemos una amplia variedad de productos regionales, como semillas, frutos secos, aceites, harinas integrales, mermeladas caseras, vinos artesanales y productos orgánicos.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Hacen envíos?</summary>
                    <p>Sí, realizamos envíos a todo el país. Para zonas cercanas, ofrecemos entrega a domicilio y para el resto de Argentina, trabajamos con servicios de paquetería confiables.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Cómo puedo realizar un pedido?</summary>
                    <p>Puedes realizar tu pedido a través de nuestra página web, redes sociales o por WhatsApp. Aceptamos múltiples métodos de pago, como transferencias bancarias, tarjetas de crédito y débito.</p>
                </details>
            </div>
            <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2" >Volver</Link>
        </div>
        
    )
}

export default Faqs;