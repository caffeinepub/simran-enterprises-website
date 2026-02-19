import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string) => {
        try {
          // Hardcoded credentials validation
          if (email === 'admin@gmail.com' && password === 'Admin@92505') {
            const token = `admin_token_${Date.now()}`;
            set({ 
              token, 
              isAuthenticated: true,
              user: { email }
            });
            return { success: true };
          }
          return { success: false, error: 'Invalid email or password' };
        } catch (error) {
          console.error('Login error:', error);
          return { success: false, error: 'An error occurred during login' };
        }
      },
      logout: () => {
        set({ token: null, isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'adminAuthToken',
    }
  )
);
