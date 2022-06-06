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
    const { container, getByText } = setup();
    expect(container).toBeInTheDocument();
    expect(getByText(/Livros/i)).toBeInTheDocument();
  });
});
