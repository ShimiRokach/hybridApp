/**
 * The costlib library contains all the actions related to cost item
 *
 */
//add costlib property to the window global object
window.costlib = {};
/**
 * This method add new cost item to local storage
 * @param costItem
 */
window.costlib.addCostItem = function (costItem) {

    //get the date from the local storage
    let data = localStorage.getItem("item")
    if (data == null) {
        //running the application in the first time
        //create array of objects
        var arr = [];
        //push the item to the array
        arr.push(costItem);
        //convert the array of object to string in JSON format
        var text = JSON.stringify(arr);
        //store it in the local storage
        localStorage.setItem("item", text);

    } else {
        //the data already exists in the local storage
        //get the array of objects from the local storage
        var arr = JSON.parse(data);
        //push the new item to the array
        arr.push(costItem);
        //convert the array of object to string in JSON format
        var text = JSON.stringify(arr);
        //store it in the local storage
        localStorage.setItem("item", text);

    }

};
/**
 * getCostsItems method return array of all cost items
 * @returns {*[]|any}
 */
window.costlib.getCostsItems = function () {
    var data = localStorage.getItem("item");
    if (data == null) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

/**
 * getCostsPerMonth method return array of all cost items for month
 * @returns {*[]|any}
 */
 window.costlib.getCostsPerMonth = function (month) {
    var vec = window.costlib.getCostsItems();
    var results = [];
    vec.forEach(
        function (ob) {
            if (month === ob.date.slice(0, 7)) {
                results.push(ob);
            }
        }
    );

    return results;

}