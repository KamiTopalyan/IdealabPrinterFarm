import { useEffect, useState } from "react";
import * as PrinterApi from "../api/printer-api";

const PrinterStatus = () => {
    const [status, setStatus] = useState<PrinterApi.PrinterStatus>();

    useEffect(() => {
        async function fetchFiles() {
            const StatusFromServer = await PrinterApi.getPrinterStatus();
            setStatus(StatusFromServer);
        }

        try {
            fetchFiles();
        } catch (e) {
            console.log(e)
        }
  }, []); 
    return (
        <div>
            <h1>Printer Status</h1>
            {status?.state ? Object.keys(status.state.flags).map((key) => {
                return <p>{key}: {key}</p>
            }) : <p>loading...</p>}
        </div>
    );
}

export default PrinterStatus;