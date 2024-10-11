const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function dateFormatter (date: string) {
  const dateArray: any = date.slice(0,10).split('-'); 
  return months[dateArray[1] - 1] + ' ' + dateArray[2] + ', ' + dateArray[0]
}