// Calculating Volume of the Cone given 2 inputs (Height and Radius) of the cone

coneVol = (h,r) => {
    const pi = 3.14159265;
    let vol = (pi * Math.pow( r , 2 ) * h ) / 3;
    return console.log(`Volume of a Cone with height ${h} and radius ${r} = ` + vol)
}
coneVol(15,3);