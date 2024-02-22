import { FormEvent, useState } from 'react'
import { v4 as uuid } from "uuid";
import ProductCard from './components/ProductCard'
import { Modal } from './components/UI/Modal'
import { colors, formInputsList, productList,categories } from './data'
import Button from './components/UI/Button'
import Input from './components/UI/Input'
import { ICategory, IProduct } from './interfaces'
import { productValidation } from './validation'
import ErrorMesaage from './components/ErrorMesaage'
import CirlceColor from './components/CirlceColor'
import Select from './components/UI/Select';
import toast, { Toaster } from "react-hot-toast";

function App() {
   const defaultProduct = {
    title:'',
    description:'',
    imageURL:'',
    price:'',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
   }
  const [products,setProducts] = useState<IProduct[]>(productList)
  const [product,setProduct] = useState<IProduct>(defaultProduct)
  const [productToEdit,setProductToEdit] = useState<IProduct>(defaultProduct)
  const [productToEditIdx,setProductToEditIdx] = useState<number>(0)
  const [errors,setErrors] = useState({title:"",description:"",imageURL:"",price:""});
  const [editErrors,setEditErrors] = useState({title:"",description:"",imageURL:"",price:""});
  const [temoColors,setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categories[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  
  
  const closeModal = () =>  setIsOpen(false)
  const openModal = () =>  setIsOpen(true)

  const closeEditModal = () =>  setIsOpenEditModal(false)
  const openEditModal = () =>  setIsOpenEditModal(true)
  
  const closeDeleteModal = () =>  setIsOpenDeleteModal(false)
  const openDeleteModal = () =>  setIsOpenDeleteModal(true)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = e.target;
    setProduct({...product, [name]: value})
    // setErrors(productValidation({title: product.title, description: product.description,imageURL: product.imageURL,price: product.price,[name]:value}))
    setErrors({...errors,[name]:""})
  }

  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = e.target;
    setProductToEdit({...productToEdit, [name]: value})
    // setErrors(productValidation({title: product.title, description: product.description,imageURL: product.imageURL,price: product.price,[name]:value}))
    setErrors({...errors,[name]:""})
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    const errors = productValidation({title: product.title, description: product.description,imageURL: product.imageURL,price: product.price});

    const hasErrorMsg= Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    if(!hasErrorMsg){
      setErrors(errors)
      return;
    }  
    
    setProducts(prev => [{...product,id: uuid(),colors:temoColors,category:selectedCategory},...prev])
    setProduct(defaultProduct)
    setTempColors([]);
    closeModal();
      toast("Product has been added successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
  }
    const submitEditHandler = (e: FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    const errors = productValidation({title: productToEdit.title, description: productToEdit.description,imageURL: productToEdit.imageURL,price: productToEdit.price});

    const hasErrorMsg= Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    if(!hasErrorMsg){
      setEditErrors(errors)
      return;
    }  
    
    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = productToEdit
    setProducts(updatedProducts)
    setProductToEdit(defaultProduct)
    setTempColors([]);
    closeEditModal();

    toast("Product has been updated successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  }
  const onCancel = (): void =>{
    setProduct(defaultProduct)
    closeModal()
  }
  const onEditCancel = (): void =>{
    closeEditModal();
  }
  
  const  removeProductHandler = () => {
      const updatedProducts = products.filter(p => p.id !== productToEdit.id)
      setProducts(updatedProducts);
      closeDeleteModal();
      toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });
  }
  
  const renderProductList = products.map((product,index) => 
     <ProductCard key={product.id} product={product}
      openEditModal={openEditModal} setProductToEdit={setProductToEdit} 
      setProductToEditIdx={setProductToEditIdx} idx={index}
      openDeleteModal={openDeleteModal}
    />
  )
  const renderFormInputList = formInputsList.map(input =>(
     <div className='flex flex-col' key={input.id}>
        <label className='text-gray-700 mb-[1px] font-medium text-sm' htmlFor={input.id}>{input.label}</label>
        <Input type='text' id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
        {errors[input.name] &&<ErrorMesaage msg={errors[input.name]} />}
      </div>
  ))
    const renderFormInputEditList = formInputsList.map(input =>(
     <div className='flex flex-col' key={input.id}>
        <label className='text-gray-700 mb-[1px] font-medium text-sm' htmlFor={input.id}>{input.label}</label>
        <Input type='text' id={input.id} name={input.name} value={productToEdit[input.name]} onChange={onChangeEditHandler} />
        {editErrors[input.name] &&<ErrorMesaage msg={editErrors[input.name]} />}
      </div>
  ))
  const renderProductColors = colors.map(color => <CirlceColor key={color} color={color} onClick={() =>{
    if(temoColors.includes(color)){
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    } 
    setTempColors((prevColors => [...prevColors,color]))}
    
  } />)
  const renderProductToEditColors = colors.map(color => <CirlceColor key={color} color={color} onClick={() =>{
    if(productToEdit.colors.includes(color)){
      // setTempColors(prev => prev.filter(item => item !== color))
      setProductToEdit({...productToEdit, colors: productToEdit.colors.filter(item=> item !==color)})
      return;
    } 
    setProductToEdit({...productToEdit,colors: [...productToEdit.colors,color]})
  
  }
    
  } />)

  return (
    <main className='container'>
      <Button className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium" width="w-fit" onClick={openModal}>
        Build a Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      
      <Modal isOpen={isOpen} closeModal={closeModal} title={"Add Product"}>
        <form className='space-y-3' onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className='flex items-center space-x-2'>{renderProductColors}</div>
          <div className='flex items-center space-x-2 flex-wrap'>
             {temoColors.map(color => <span className='p-1 mr-1 mb-1 text-xs rounded-md text-white' 
                style={{backgroundColor:color}} 
                key={color}
              >{color}
              </span>)}
          </div>
          

          <div className='flex items-center space-x-3'>
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500" type="button" onClick={onCancel}>Cancel</Button>
          </div>

        </form>
        
      </Modal>

      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title={"Edit Product"}>
        <form className='space-y-3' onSubmit={submitEditHandler}>
          {renderFormInputEditList}
          <Select selected={productToEdit.category} setSelected={(value)=> setProductToEdit({...productToEdit,category:value})}/>
          <div className='flex items-center space-x-2'>{renderProductToEditColors}</div>
          <div className='flex items-center space-x-2 flex-wrap'>
             {productToEdit.colors.map(color => <span className='p-1 mr-1 mb-1 text-xs rounded-md text-white' 
                style={{backgroundColor:color}} 
                key={color}
              >{color}
              </span>)}
          </div>
          

          <div className='flex items-center space-x-3'>
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500" type="button" onClick={onEditCancel}>Cancel</Button>
          </div>

        </form>
        
      </Modal>
      <Modal isOpen={isOpenDeleteModal} closeModal={closeEditModal}
        title={"Are you sure you want to remove this Product from your Store?"}
        description={"Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."}
      >
          <div className='flex items-center space-x-3'>
            <Button className="bg-[#c2344d] hover:bg-red-800" onClick={removeProductHandler}>Yes, Delete</Button>
            <Button className="bg-gray-400 hover:bg-gray-500" type="button" onClick={closeDeleteModal}>Cancel</Button>
          </div>
        
      </Modal>

    <Toaster />
    </main>
  )
}

export default App


