import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Caminhoes } from ".";
import { vi, it, expect } from "vitest";

vi.mock("../../../redux/features/truck/truckSlice", () => ({
  useGetTruckQuery: vi.fn(() => ({
    data: [
      {
        idCaminhao: 1,
        modelo: "Scania",
        placa: "ABC1234",
        nivelCombustivel: 80,
        statusCaminhao: "DISPONIVEL",
        status: "ATIVO",
      },
      {
        idCaminhao: 2,
        modelo: "Volvo",
        placa: "DEF5678",
        nivelCombustivel: 30,
        statusCaminhao: "EM_VIAGEM",
        status: "ATIVO",
      },
    ],
  })),
  useAddTruckMutation: vi.fn(() => ""),
  useEditTruckMutation: vi.fn(() => ""),
  useDeleteTruckMutation: vi.fn(() => "")
}));

describe("Caminhões Page", () => {
  it("should render page title", async () => {
    render(<Caminhoes />);
    expect(screen.getByTestId("page-name").innerHTML).toBe("Caminhões");
  });
  
  it("should render truck cards", () => {
    render(<Caminhoes />);
    expect(screen.getByText("Scania")).to.exist;
    expect(screen.getByText("ABC1234")).to.exist;
    expect(screen.getByText("Volvo")).to.exist;
    expect(screen.getByText("DEF5678")).to.exist;
  });

  it("should filter trucks", async () => {
    render(<Caminhoes />);
    const searchInput = screen.getByPlaceholderText("Procurar caminhões");
    userEvent.type(searchInput, "Scania");
    expect(await screen.findByText("Scania")).to.exist;
    expect(screen.queryByText("Volvo")).to.exist;
  });

  it('should open CreateTruckModal when "Cadastrar Caminhão" button is clicked', async () => {
    render(<Caminhoes />);
    const createButton = screen.getByText("Cadastrar Caminhão");
    userEvent.click(createButton);
    expect(await screen.findByText("Cadastrar Caminhão")).to.exist;
  });

  it("should open EditTruckModal when edit button is clicked", async () => {
    render(<Caminhoes />);
    const editButton = screen.getAllByTitle("Abastecer")[0];
    userEvent.click(editButton);
    expect(await screen.findByText("Abastecer Caminhão")).to.exist;
  });

  it("should open DeleteTruckModal when delete button is clicked", async () => {
    render(<Caminhoes />);
    const deleteButton = screen.getAllByTitle("Deletar")[0];
    userEvent.click(deleteButton);
    expect(await screen.findByText("Tem certeza que deseja deletar?")).to.exist;
  });
});
