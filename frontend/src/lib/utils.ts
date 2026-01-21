/**
 * Get the base path for the application
 * This is used to prefix asset paths when deploying to GitHub Pages
 */
export const getBasePath = () => {
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

/**
 * Get the full path for an image asset
 * @param path - The path to the image (e.g., '/virtual_assistant.jpg' or '/assets/sheridan.JPG')
 * @returns The full path including basePath for production
 */
export const getImagePath = (path: string) => {
    const basePath = getBasePath();
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return basePath ? `${basePath}${cleanPath}` : cleanPath;
};
