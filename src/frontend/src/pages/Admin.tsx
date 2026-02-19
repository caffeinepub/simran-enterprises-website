import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useGetAllContacts } from '../hooks/useQueries';
import { useAuth } from '../hooks/useAuth';
import AdminAuthGuard from '../components/admin/AdminAuthGuard';
import ContactsTable from '../components/admin/ContactsTable';
import { Button } from '@/components/ui/button';
import { Loader2, LogOut } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { data: contacts, isLoading, error } = useGetAllContacts();

  // Redirect unauthenticated users to login page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/admin/login', search: { redirect: '/admin' } });
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate({ to: '/admin/login' });
  };

  // Don't render content if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">View and manage contact form submissions</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-3 text-lg text-muted-foreground">Loading submissions...</span>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive rounded-lg p-6 text-center">
              <p className="text-destructive font-medium">Failed to load contact submissions</p>
              <p className="text-sm text-muted-foreground mt-2">
                {error instanceof Error ? error.message : 'An error occurred'}
              </p>
            </div>
          )}

          {!isLoading && !error && contacts && (
            <ContactsTable contacts={contacts} />
          )}
        </div>
      </div>
    </AdminAuthGuard>
  );
}
