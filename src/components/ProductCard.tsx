import { IProduct } from "../interfaces"
import { numberWithCommas, trimString } from "../utils/functions"
import CirlceColor from "./CirlceColor"
import Image from "./Image"
import Button from "./UI/Button"

interface IProps{
  product: IProduct
  setProductToEdit: (product:IProduct) => void
  openEditModal: () => void
  setProductToEditIdx: (value: number) => void
  idx: number
  openDeleteModal: () => void
}

const ProductCard = ({product, setProductToEdit,openEditModal,setProductToEditIdx, idx,openDeleteModal}:IProps) => {
  const {title, description, imageURL,price,colors,category} = product

  const renderProductColors = colors.map(color => <CirlceColor key={color} color={color}/>)
  
  const onEdit = () => {
    setProductToEdit(product)    
    openEditModal()
    setProductToEditIdx(idx)
  }
    const onRemove = () => {
    setProductToEdit(product)    
    openDeleteModal()
    setProductToEditIdx(idx)
  }
  
  
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
     
      <Image imageUrl={imageURL}
        alt={title}
        className="rounded-md mb-2"
        />

      <h3>{title}</h3>
      <p>{trimString(description)}</p>
      <div className='flex items-center flex-wrap space-x-1 mt-2'>
        {!colors.length ?  <p className="min-h-[20px]">Not available colors!</p> : renderProductColors }
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${numberWithCommas(price)}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold">{category.name}</span>
          <Image imageUrl={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full mb-2 object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2">
         <Button className="bg-indigo-700" width="w-full" onClick={onEdit}>Edit</Button>
         <Button className="bg-red-700" width="w-full" onClick={onRemove}>Remove</Button>
      </div>
    </div>
  )
}

export default ProductCard