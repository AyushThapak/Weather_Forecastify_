function dayDateFunction(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000);
}
let t = new Date();
let currentDayNumber = dayDateFunction(t);
let future = currentDayNumber + 30;
let topImageDayNumber = 0;

if(future > 365){ 
    topImageDayNumber = future - 365;
} else {
    topImageDayNumber = future
};

export default topImageDayNumber;
