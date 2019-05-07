/* Router */
export const getPathname = state => state.router.location.pathname;

/* User */
export const getLoginForm = state => state.user.loginForm;
export const getIsLoggingIn = state => state.user.isLoggingIn;
export const getUserError = state => state.user.error;
