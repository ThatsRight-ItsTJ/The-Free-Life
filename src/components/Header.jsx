import React from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-blue-200 fixed w-full top-0 h-40">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        <img 
          src="/logo.png" 
          alt="Wiki Logo" 
          className="h-32 w-auto object-contain"
          width={128}
          height={128}
        />
        <div className="flex items-center gap-6 ml-6">
          <span className="text-2xl font-bold text-[#0070f3]">
            TheFreeLife
          </span>
          <span className="text-[#54595d] text-lg">
            
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
