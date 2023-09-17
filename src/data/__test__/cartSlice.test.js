import reducer, { add, remove } from "../slice/cartSlice";
 
test("should return the initial state", () => {
	expect(reducer(undefined, { type: undefined })).toEqual({ });
});

test("should handle a item 2 being added to an cart", () => {
	const previousState = {};
 
	expect(reducer(previousState, add({ id: 2 }))).toEqual({ 2: 1 });
});
 
test("should handle a item 1314 being added to an cart", () => {
	const previousState = {};
 
	expect(reducer(previousState, add({ id: 1314 }))).toEqual({ 1314: 1 });
});
 
test("should handle a item being removed to an cart", () => {
	const previousState = { 1314: 3 };
 
	expect(reducer(previousState, remove({ id: 1314 }))).toEqual({ 1314: 2 });
})