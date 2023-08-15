'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function MessageCardsMasonry({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 700: 2, 1280: 3, 1536: 4 }}
    >
      <Masonry gutter="0.75rem" columnsCount={3}>
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
}
