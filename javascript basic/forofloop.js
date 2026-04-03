let r={
    length:20,
    breadth:30
};
for(let key of Object.keys(r)) {
    console.log(key);
    console.log(r[key]);
}
for(let key of Object.entries(r)) {
    console.log(key);
}