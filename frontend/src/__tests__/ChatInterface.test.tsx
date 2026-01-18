import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChatInterface from "@/components/ChatInterface";
import * as api from "@/lib/api";

jest.mock("@/lib/api");

describe("ChatInterface", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders chat interface with initial message", () => {
    render(<ChatInterface />);
    expect(
      screen.getByText(/Start a conversation with VirtuServe/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Type your message/i),
    ).toBeInTheDocument();
  });

  it("sends a message when form is submitted", async () => {
    const mockResponse = {
      response: "Test response",
      conversation_id: "test-123",
      timestamp: new Date().toISOString(),
    };

    (api.sendMessage as jest.Mock).mockResolvedValue(mockResponse);

    render(<ChatInterface />);

    const input = screen.getByPlaceholderText(/Type your message/i);
    const submitButton = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(api.sendMessage).toHaveBeenCalledWith({
        message: "Hello",
        conversation_id: null,
        language: "en",
      });
    });

    await waitFor(() => {
      expect(screen.getByText("Test response")).toBeInTheDocument();
    });
  });

  it("disables input while loading", async () => {
    const mockResponse = {
      response: "Test response",
      conversation_id: "test-123",
      timestamp: new Date().toISOString(),
    };

    (api.sendMessage as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => setTimeout(() => resolve(mockResponse), 100)),
    );

    render(<ChatInterface />);

    const input = screen.getByPlaceholderText(
      /Type your message/i,
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(input.disabled).toBe(true);
      expect(submitButton.disabled).toBe(true);
    });

    // After loading completes, input should be enabled but
    // submit stays disabled due to empty input
    await waitFor(() => {
      expect(screen.getByText("Test response")).toBeInTheDocument();
    });

    // Re-query the input after the component updates
    const updatedInput = screen.getByPlaceholderText(
      /Type your message/i,
    ) as HTMLInputElement;
    const updatedSubmitButton = screen.getByRole("button") as HTMLButtonElement;

    expect(updatedInput.disabled).toBe(false);
    expect(updatedSubmitButton.disabled).toBe(true);

    // Typing again enables the submit button
    fireEvent.change(updatedInput, { target: { value: "Another" } });
    await waitFor(() => {
      expect(updatedSubmitButton.disabled).toBe(false);
    });
  });
});
