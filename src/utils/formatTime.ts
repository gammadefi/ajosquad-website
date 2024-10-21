import { format, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date : string) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date : string) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date : string) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date : string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}

export function formatDate(currentDate : string){
   const [date , time] = currentDate.replace("T", " ").split(" ");
  //  console.log(date, time+":00");
   return `${date} ${time}:00`
   
}

export const formatDate2 = (dateString: string): string => {
  const date = new Date(dateString);
  
  // Adjust for time zone offset if necessary
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offset);
  
  // Format the date to YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

