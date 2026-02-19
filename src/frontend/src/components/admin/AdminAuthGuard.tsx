import { ReactNode, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../hooks/useAuth';
import { Loader2 } from 'lucide-react';

interface AdminAuthGuardProps {
  children: ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect unauthenticated users to login page
  useEffect(() => {
    if (!isAuthenticated) {
      const currentPath = window.location.pathname;
      const searchParams = new URLSearchParams();
      searchParams.set('redirect', currentPath);
      navigate({ 
        to: '/admin/login',
        search: { redirect: currentPath }
      });
    }
  }, [isAuthenticated, navigate]);

  // Don't render content if not authenticated (will redirect)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="flex items-center space-x-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="text-lg text-muted-foreground">Checking authentication...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
