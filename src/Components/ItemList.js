import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action 
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="text-left py-2 my-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-9/12">
                       <div className="py-2">
                          <span>{item.card.info.name}</span>
                          <span>
                             - ₹{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice /100} 
                          </span>
                       </div>
                       <p className="text-xs">
                          {item.card.info.description}
                       </p>
                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute">
                            <button 
                              className="mx-6 bg-black shadow-lg p-1 text-gray-50  font-bold rounded-md"
                              onClick={() => handleAddItem(item)}
                            >
                                Add + 
                            </button>
                        </div>          
                        <img className="rounded-md w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}/>  
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;