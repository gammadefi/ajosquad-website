export function calculateReadTime(text: string) {
  // Average reading speed 
  const wordsPerMinute = 250;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}