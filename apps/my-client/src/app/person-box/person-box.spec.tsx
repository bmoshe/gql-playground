import { render } from '@testing-library/react';

import PersonBox from './person-box';

describe('PersonBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonBox />);
    expect(baseElement).toBeTruthy();
  });
});
