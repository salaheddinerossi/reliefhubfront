import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

// Utility function to extract the role from the token
function extractRoleFromToken(authService: AuthenticationService): string | null {
  const currentUser = authService.currentUserValue;
  if (!currentUser || !currentUser.token) {
    return null;
  }

  try {
    const tokenPayload = JSON.parse(atob(currentUser.token.split('.')[1]));
    return tokenPayload.role;
  } catch (error) {
    return null;
  }
}

export const organizationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const role = extractRoleFromToken(authService);

  if (role === 'ROLE_ORGANIZATION') {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const role = extractRoleFromToken(authService);

  if (role === 'ROLE_ADMIN') {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

export const generalUserGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const role = extractRoleFromToken(authService);

  if ( role == 'ROLE_ORGANIZATION') {
    router.navigate(['/organization']);
    return false;
  }

  if (role == 'ROLE_ADMIN' ) {
    router.navigate(['/admin']);
    return false;
  }


  return true;
};
