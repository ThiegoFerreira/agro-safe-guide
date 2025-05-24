
import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

const MobileContainer = ({ children }: MobileContainerProps) => {
  return (
    <div className="min-h-screen max-w-sm mx-auto bg-gray-100 relative overflow-hidden">
      {children}
    </div>
  );
};

export default MobileContainer;
