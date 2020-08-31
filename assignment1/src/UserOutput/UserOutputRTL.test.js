import * as React from 'react';
import { render } from '@testing-library/react';
import UserOutput from './UserOutput';

describe('<UserOutput />', () => {
  it('should display the username', () => {
    // Arrange
    const username = 'John';

    // Act
    const { getByText, asFragment } = render(<UserOutput userName={username} />);
    const element = getByText('John');

    // Assert
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('P');
    // expect(asFragment()).toMatchSnapshot();
  });
});
