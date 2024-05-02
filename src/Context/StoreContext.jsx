import {createContext ,useState} from 'react'
import { photo_list } from '../Components/Assets/All_image';

export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{

   const [cartItems,setCartItems]=useState({});

   const addToCart=(itemId)=>{

    if(!cartItems[itemId]){
      setCartItems((prev)=>({
        ...prev,[itemId]:1
        
      }))
    }else{
      setCartItems((prev)=>({
        ...prev,[itemId]:prev[itemId]+1

      }))
    }
   }
const contextValue={
    photo_list,
    addToCart
    
  }
  return (

    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider