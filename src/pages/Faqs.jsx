import { Link } from "react-router-dom";
import MapLink from "../components/map/Map";


function Faqs () {
    return(
        <div className="flex flex-col justify-between">
            <div className="w-100 h-svh flex flex-col gap-10 items-start pl-10 pr-10 pt-10 bg-secondary">
                <h1 className="text-5xl text-center w-full border-b-2 p-2">FAQS</h1>
                <details className="w-full">
                    <summary className="w-max text-xl">¿Quiénes somos?</summary>
                    <p className="text-lg">Somos una tienda especializada en productos electrónicos de alta calidad, con el compromiso de ofrecer los mejores precios y un excelente servicio al cliente para que puedas disfrutar de tecnología de vanguardia en todo momento.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Dónde estamos ubicados?</summary>
                    <p className="text-lg">Nuestra tienda física se encuentra en Salta 1022 norte, San Juan, Argentina. También contamos con envíos a nivel nacional, para que puedas recibir tus productos electrónicos en cualquier parte del país.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Qué productos ofrecemos?</summary>
                    <p className="text-lg">En nuestra tienda podrás encontrar una amplia gama de productos electrónicos, desde smartphones, computadoras portátiles, televisores 4K, accesorios para gaming, hasta dispositivos inteligentes para el hogar.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Hacen envíos?</summary>
                    <p className="text-lg">Sí, realizamos envíos a todo el país. Ofrecemos opciones de entrega rápida y segura mediante servicios de paquetería confiables, para que recibas tus productos electrónicos de manera oportuna.</p>
                </details>

                <details>
                    <summary className="w-max text-xl">¿Cómo puedo realizar un pedido?</summary>
                    <p className="text-lg">Puedes realizar tu pedido fácilmente a través de nuestra página web, por redes sociales o WhatsApp. Aceptamos diversas formas de pago, como transferencias bancarias, tarjetas de crédito, débito y métodos de pago online.</p>
                </details>

            </div>
            <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2" >Volver</Link>
        </div>
        
    )
}

export default Faqs;