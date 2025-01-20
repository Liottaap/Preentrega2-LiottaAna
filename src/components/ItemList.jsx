
import Item from './Item'

const ItemList = ({products}) => {
    return(
        <div className='flex gap-20 flex-wrap mt-20 max-h-max'>
            {products?.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;