import { ReactNode } from 'react';
import { components } from 'react-select';

interface Props {
  children?: ReactNode
}

const Control = ({ children, ...props }: Props) => (
  <components.Control {...props}>
    <span className='flex'>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      {children}
    </span>
  </components.Control>
);

export default Control;
