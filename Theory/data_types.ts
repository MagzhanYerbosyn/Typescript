// 1. Generic example of using Record for a userRoles

const userRoles: Record<string, string> = {
  admin: 'full-access',
  editor: 'limited-access',
  viewer: 'view-only',
};

// 2. Example of using an index signature

const settings: { [key: string]: string } = {
  theme: 'dark',
  language: 'en',
  layout: 'grid',
};
