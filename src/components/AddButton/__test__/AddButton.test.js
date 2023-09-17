import { render, fireEvent } from "@testing-library/react";
import AddButton from "@/components/AddButton";
 
describe("AddButton", () => {
	it("renders a AddButton", () => {
		const { getByTestId } = render(<AddButton />);
 
		const countNumber = getByTestId("add-btn");
 
		expect(countNumber).toBeInTheDocument();
	});
});