/* 
creates a new format/type for the scanned and stored data
*/
export interface scanData {
    locID: string,
    currentTime: string,
    status: boolean,
    risk: Int16Array
  }

export interface storedData {
    data : {
            locID : string,
            tracerID : string,
            time : string,
            },
key : string}
