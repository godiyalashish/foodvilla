export const filterData =(searchValue, restaurantList) =>{
    return restaurantList.filter((restaraunt) => restaraunt.data.name.toLowerCase().includes(searchValue.toLowerCase()))
 }