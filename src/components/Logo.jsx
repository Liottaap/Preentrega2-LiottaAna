function Logo({url,titulo}){
    return (
        <>
            <img src={url} alt="logo"/>
            <h2>{titulo}</h2>
        </>
    )
}

export default Logo;