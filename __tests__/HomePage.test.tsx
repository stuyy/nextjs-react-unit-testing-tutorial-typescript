import Home from '@/app/page';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home Page ', () => {
  describe('Rendering', () => {
    it('should have Home Page text', () => {
      render(<Home />);
      expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    it('should have button with text Click Me', () => {
      render(<Home />);
      expect(
        screen.getByRole('button', { name: 'Click Me' })
      ).toBeInTheDocument();
    });

    it('should have input field with label Enter Random Text', () => {
      render(<Home />);
      expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
    });

    it('should have input field with label Enter Specific Text', () => {
      render(<Home />);
      expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
    });

    it('should find input field by placeholder text Search', () => {
      render(<Home />);
      expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
    });

    it('should find input field by display value', () => {
      render(<Home />);
      screen.getByDisplayValue(/AUDI/);
    });

    it('should not find element with text: This is the text!', () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    it('should click on Show Text button and find new text', async () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
      const showTextButton = screen.getByRole('button', { name: 'Show Text' });
      await userEvent.click(showTextButton);
      expect(
        await screen.findByText('This is the text!', {}, { timeout: 5000 })
      ).toBeInTheDocument();
    });
  });
});
