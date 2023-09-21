import http from 'http';
import axios from 'axios';

const PRINTER_LOCAL_IP = "http://10.0.90.151"
const PRINTER_PORTS = [7000, 7001, 7002, 7003];
const PRINTER_URLS = PRINTER_PORTS.map(port => `${PRINTER_LOCAL_IP}:${port}/`);

export async function getPrintersStatus() {
    const printerStatus = await Promise.all(PRINTER_URLS.map(url => axios.get(url)));
    return printerStatus.map(status => status.data);
}