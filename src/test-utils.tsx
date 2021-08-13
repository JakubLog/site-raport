import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';

interface props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: props) => {
  return <AppProviders>{children}</AppProviders>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: any, options: any): unknown => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
