'use client';

import { useParams } from 'next/navigation';;
import { useEffect, useState } from 'react';
import { blogPosts } from '../blogposts';

export default function BlogPostPage() {
  const { slug } = useParams() as { slug: string };
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const matchedPost = blogPosts.find((p) => p.slug === slug);
    if (!matchedPost) return;

    matchedPost.component().then((mod) => {
      setComponent(() => mod.default);
    });
  }, [slug]);

  if (!Component) {
    return (
      <div className="text-center py-10 text-[#2c4a30]">
        Loading article...
      </div>
    );
  }

  return <Component />;
}
