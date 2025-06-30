import appwriteErrors from '@/assets/appwriteErrors.json';

const extractTypeFromHtml = (htmlString) => {
  // Regex to find the content within <span class='type'>...</span>
  const match = htmlString.match(/<span class='type'>(.*?)<\/span>/);
  // If a match is found, return the content inside the span
  if (match && match[1]) {
    return match[1];
  }
  
  return null;
};

export const getFriendlyError = (error) => {
  const defaultMessage = 'An unexpected network error occurred. Please check your connection or try again later.';

  if (!error) {
    return defaultMessage;
  }

  let errorCode = error.type;

  // Check if the error message is an HTML string
  if (!errorCode && typeof error.message === 'string' && error.message.trim().startsWith('<!DOCTYPE html>')) {
    errorCode = extractTypeFromHtml(error.message);
  }
  if (errorCode) {
    const [category] = errorCode.split('_');
    
    if (appwriteErrors[category] && appwriteErrors[category][errorCode]) {
      return appwriteErrors[category][errorCode].message;
    }
  }
  
  // 3. Fallback for any other case
  return defaultMessage;
};