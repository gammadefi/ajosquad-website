export function calculateReadTime(text: string) {
  // Average reading speed 
  const wordsPerMinute = 250;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export const getFirst10Words = (text: string) => {
  const words = text.split(' '); // Split the sentence by spaces
  if (words.length <= 10) return text; // Return the original text if it's 50 words or less
  return words.slice(0, 10).join(' ') + '...'; // Join the first 50 words and add ellipsis
};