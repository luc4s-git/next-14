import React from 'react';

export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <div className="max-w-3xl m-auto">
      <div className="mockup-window border border-base-300">
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          {children}
        </div>
      </div>
    </div>
  );
}
