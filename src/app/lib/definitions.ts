// Type definitions of the data structures used in the application.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  role: 'admin' | 'user' | 'guest';
  lastLogin: Date | null;
  profilePictureUrl?: string; // Optional field for user profile picture
  createdAt: Date;
  updatedAt: Date;
};
