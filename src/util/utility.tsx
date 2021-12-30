export function tConvert (timeString:string) {
    const H = +timeString.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? " AM" : " PM";
    return ( h + timeString.substr(2, 3) + ampm )
  }

export function dateFormator (date : string){

    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    let dateMonth = parseInt(date.substring(5,7))
    const selectedMonthName = months[dateMonth - 1];
    const finalDate = date.substring(0,5) + selectedMonthName.toString() + date.substring(7,10)
    
    return finalDate 
  }