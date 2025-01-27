
import Item from './Item'

const ItemList = ({products}) => {
    return(
        <section className='flex gap-20 flex-wrap mt-20'>
            {products && products.length > 0 ? (
                products.map((prod) => <Item key={prod.id} {...prod} />)) : (
                <p className="text-center w-full mt-10 text-lg">No hay productos disponibles.</p>
                )}
        </section>
    )
}

export default ItemList;