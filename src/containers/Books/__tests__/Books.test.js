import { render } from 'test-utils';
import Books from 'containers/Books';

const setup = () => {
  const testRenderer = render(<Books />);

  return {
    ...testRenderer,
    newBookButton: testRenderer.getByTitle(/Novo Livro/i),
    authorsButton: testRenderer.getByRole('button', { name: /Autores/i }),
  };
};

describe('Books', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render component', () => {
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });

  test('should render title', () => {
    const { getByText } = setup();
    expect(getByText(/Livros/i)).toBeInTheDocument();
  });
});
