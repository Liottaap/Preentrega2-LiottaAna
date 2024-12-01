function ItemListContainer({ greeting, className }) {
    return (
        <div className={`relative p-2 bg-[#63a85a] rounded-full ${className}`}>
        <span className="absolute w-5 h-5 bg-[#63a85a]  bg-white transform rotate-45 left-9 top-10 -translate-y-1"></span>
            {greeting}
        </div>
    );
}

export default ItemListContainer;