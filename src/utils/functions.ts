export const trimString = (txt: string, maxLength: number = 90): string =>{
    if(txt.length > maxLength){
        return `${txt.slice(0,maxLength)}...`;
    }
    return txt;
}
export function numberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}