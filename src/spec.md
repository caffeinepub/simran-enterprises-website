# Specification

## Summary
**Goal:** Fix the admin login authentication functionality to allow successful login with the hardcoded credentials.

**Planned changes:**
- Debug and fix the login authentication flow in the useAuth hook to properly validate credentials (admin@gmail.com / Admin@92505)
- Ensure authentication state correctly updates and persists in localStorage after successful login
- Fix the AdminAuthGuard component to properly read authentication state and allow authenticated access to /admin route
- Resolve any console errors or JavaScript exceptions occurring during the login process
- Verify correct redirect behavior after successful login to /admin dashboard

**User-visible outcome:** Admin can successfully log in using the credentials admin@gmail.com and Admin@92505, and access the admin dashboard without errors or authentication issues.
