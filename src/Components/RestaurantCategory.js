import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    return(
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-4 p-4 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={setShowIndex}>
                    <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "🔼" : "🔽" }</span>
                </div>
                { showItems && <ItemList items={data.itemCards}/>}               
            </div>
        </div>
    )
}
export default RestaurantCategory;