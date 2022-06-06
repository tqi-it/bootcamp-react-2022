import axiosMock from 'mocks/axios';
import AuthenticationApi from 'services/authentication';

describe('Authentication Api', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValue({
      data: {},
    });
  });

  test('should call logout authors', () => {
    AuthenticationApi.logout();
    expect(axiosMock.post).toHaveBeenCalledWith('/auth/logout');
  });
});
