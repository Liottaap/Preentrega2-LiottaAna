import { Link } from "react-router-dom";
import MapLink from "../components/map/Map";


function Faqs () {
    return(
        <main className="flex flex-col gap-10">

            <h1 className="text-5xl text-center w-full border-b-2 p-2">FAQS</h1> 

            <section className="flex gap-10 items-start pl-10 pr-10 pt-10">
                <section className="w-1/2  flex flex-col gap-12 mt-16">
                    <details className=" w-full">
                        <summary className="w-max text-2xl">¿Quiénes somos?</summary>
                        <p className="mt-5 text-xl">Somos una pequeña empresa destinada a la venta y difusión de productos tecnológicos.</p>
                    </details>

                    <details>
                        <summary className="w-max text-2xl">¿Dónde estamos ubicados?</summary>
                        <p className="mt-5 text-xl">Nuestra dirección es Salta 1022 norte, San Juan, Argentina. También contamos con envíos a nivel nacional para que puedas disfrutar de nuestros productos donde sea que estés.</p>
                    </details>

                    <details>
                        <summary className="w-max text-2xl">¿Qué productos ofrecemos?</summary>
                        <p className="mt-5 text-xl">Ofrecemos una amplia variedad de productos tales como televisores de última generación, smartphones, computadoras para uso gaming, monitores, mouses, teclados, etc.</p>
                    </details>

                    <details>
                        <summary className="w-max text-2xl">¿Hacen envíos?</summary>
                        <p className="mt-5 text-xl">Sí, realizamos envíos a todo el país. Para zonas cercanas, ofrecemos entrega a domicilio y para el resto de Argentina, trabajamos con servicios de paquetería confiables.</p>
                    </details>

                    <details>
                        <summary className="w-max text-2xl">¿Cómo puedo realizar un pedido?</summary>
                        <p className="mt-5 text-xl">Puedes realizar tu pedido a través de nuestra página web, redes sociales o por WhatsApp. Aceptamos múltiples métodos de pago, como transferencias bancarias, tarjetas de crédito y débito.</p>
                    </details>
                </section>
                
                <MapLink/>
            </section>

            <Link to="/" className=" ml-5 w-14 text-primary text-xl" >Volver</Link>
        </main>
        
    )
}

export default Faqs;