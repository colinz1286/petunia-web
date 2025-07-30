export type BlogPostEntry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
  component: () => Promise<{ default: React.ComponentType<object> }>;
};

export const blogPosts: BlogPostEntry[] = [
  {
    slug: 'crocs-safety-dog-daycare',
    title: 'Are Crocs Safe to Wear at Dog Boarding & Daycare Facilities?',
    date: 'January 3, 2024',
    description:
      'Explore the pros and cons of wearing Crocs in a pet care facility based on real-world experience and safety insights.',
    component: () =>
      import('./posts/crocs-safety-dog-daycare') as Promise<{ default: React.ComponentType<object> }>,
    categories: ['boarding', 'walker', 'sitter'],
  },
  {
    slug: 'manager-pay-benefits',
    title: 'What Should You Pay Your Dog Boarding & Daycare Manager?',
    date: 'January 10, 2024',
    description:
      'Compare national pay, benefits, and incentive structures for pet boarding managers — plus how we do it at Petunia.',
    component: () =>
      import('./posts/manager-pay-benefits') as Promise<{ default: React.ComponentType<object> }>,
    categories: ['boarding', 'owner'],
  },
];
