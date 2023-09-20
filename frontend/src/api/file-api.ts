import axios, { Axios, AxiosPromise } from 'axios';

interface DifferentFile {
  modified: Number;
  path: String;
  permissions: String;
  size: Number;
}

export interface FileReturn {
  result: DifferentFile[];
}

export async function getFiles(): Promise<FileReturn> {
  const files = await axios.get("http://10.0.90.151/server/files/list")
  return files.data;
}




export const uploadFile = async (file: File) => {
    console.log(file)
    var formData = new FormData();
    var reader = new FileReader();

    formData.append('file', file as Blob);

    axios.post('http://10.0.90.151/server/files/upload', formData, {
            headers: {
      'Content-Type': 'multipart/form-data'
    }})
}