function randomize(Range,UsedValues){

    let Value = 999;

    UsedValues.forEach((value) => {
        while(Value < Range[0] || Value > Range[1] || Value == value){
            Value = Math.round(Math.random() * 11);
        }
    });

    return Value;
}

module.exports = {
    randomize
}