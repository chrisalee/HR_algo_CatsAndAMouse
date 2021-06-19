// Complete the catAndMouse function below.
const catAndMouse = (x, y, z) => {
    let CatADistance = Math.abs(x - z);
    console.log("CatA ",CatADistance);
    let CatBDistance = Math.abs(y - z);
    console.log("CatB ",CatBDistance);
    if(CatADistance === CatBDistance) {
        console.log("Mouse C");
        return "Mouse C";
    } else if(CatBDistance > CatADistance) {
        console.log("Cat A");
        return "Cat A";
    } else {
        console.log("Cat B");
        return "Cat B";
    }

}
