import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName ] = useState('')
    const [phone, setPhone ] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {name, phone, email}
        onConfirm(userData)
    }
    
    return(
        <main className="flex flex-col items-center gap-10">
            <form onSubmit={handleConfirm} className="flex flex-col gap-10 border-4 pl-5 pr-5 pt-5 pb-5 justify-center ml-auto mr-auto w-1/2 h-1/2 bg-primary text-whitesmoke">
                <label className="flex flex-col text-2xl w-86 gap-5 items-center justify-center border-b-8">
                    Nombre y Apellido
                    <input type="text" value={name} placeholder="Juan Pérez" onChange={({target}) => setName(target.value)} className="w-2/5 text-center mb-5 focus:scale-x-110 text-black"/>
                </label>
                <label  className="flex flex-col text-2xl w-86 gap-5 items-center justify-center border-b-8">
                    Teléfono
                    <input type="text" value={phone} placeholder="(011) 15 1234567" onChange={({target}) => setPhone(target.value)} className="w-2/5 text-center mb-5 focus:scale-x-110 text-black"/>
                </label>
                <label  className="flex flex-col text-2xl w-86 gap-5 items-center justify-center">
                    Email
                    <input type="text" value={email} placeholder="ejemplo@correo.com" onChange={({target}) => setEmail(target.value)} className="w-2/5 text-center mb-5 focus:scale-x-110 text-black"/>
                </label>

                <button type="submit" className="w-full h-auto ml-auto mr-auto text-center text-2xl bg-whitesmoke border-primary text-primary px-4 py-2 rounded-md hover:w-52 hover:rounded-2xl transition-all ">Crear Orden</button>
            </form>

        </main>
    )
}

export default CheckoutForm;