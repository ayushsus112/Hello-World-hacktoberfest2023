class myStructure {
constructor() {
	this.arr = [];
	this.Map = new Map();
}

add(x) {
	if (this.Map.has(x)) return;
	let index = this.arr.length;
	this.arr.push(x);
	this.Map.set(x, index);
}

remove(x) {
	if (!this.Map.has(x)) return;
	let index = this.Map.get(x);
	this.Map.delete(x);
	let last = this.arr.length - 1;
	[this.arr[index], this.arr[last]] = [this.arr[last], this.arr[index]];
	this.arr.pop();
	this.Map.set(this.arr[index], index);
}

search(x) {
	return this.Map.has(x) ? this.Map.get(x) : -1;
}

getRandom() {
	let randomIndex = Math.floor(Math.random() * this.arr.length);
	return this.arr[randomIndex];
}
}

let ds = new myStructure();
ds.add(10);
ds.add(20);
ds.add(30);
ds.add(40);
console.log(ds.search(30));
ds.remove(20);
ds.add(50);
console.log(ds.search(50));
console.log(ds.getRandom());
