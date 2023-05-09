export function filterdata(searchText, restaurants){
    const filterdata = restaurants.filter((restaurant)=>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterdata;
}