/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInDays, formatDistance, parseISO } from 'date-fns';



export const subtractDates = (dateStr1: any, dateStr2: any) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');


export const getToday = function (options:any = {}) {
  const today = new Date();


  if (options?.end)
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value: number | bigint) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );
  export function formatSerialNumber(serialNumber: string) {
    const formattedSerialNumber = serialNumber.padStart( serialNumber.length+1,'#');
  
    return formattedSerialNumber;
  }