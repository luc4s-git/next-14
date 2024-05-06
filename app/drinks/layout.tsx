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
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest new-project</code>
        </pre>
      </div>
      {children}
    </div>
  );
}
