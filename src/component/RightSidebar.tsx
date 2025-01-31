import React from 'react';

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  isOpen,
  onClose,
  children,
  title = 'My Orders',
}) => {
  return (
    <div
      className={`fixed top-[50px] right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '30%' }}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          &#10005;
        </button>
      </div>
      <div className="p-4 overflow-y-auto">{children}</div>
    </div>
  );
};

export default RightSidebar;
