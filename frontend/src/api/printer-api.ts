import axios from "axios";

export interface PrinterStatus {
        temperature: {
        tool0: {
            actual: number,
            offset: number,
            target: number
        },
        bed: {
            actual: number,
            offset: number,
            target: number
        },
    },
    state: {
        text: "state",
        flags: {
            operational: boolean
            paused: boolean,
            printing: boolean,
            cancelling: boolean,
            pausing: boolean,
            error: boolean,
            ready: boolean,
            closedOrError: boolean
        }
    }
}

export async function getPrinterStatus(): Promise<PrinterStatus> {
  const response: PrinterStatus = await axios.get("http://10.0.90.151/api/printer");
  return response;
}