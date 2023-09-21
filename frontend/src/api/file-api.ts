import axios from 'axios';

export interface FormattedFile {
    modified: Number;
    path: String;
    permissions: String;
    size: Number;
}

interface file {
    file: FormattedFile[];
}

export async function getFiles(): Promise<file> {
  const files = await axios.get("http://10.0.90.151/server/files/list")
  return files.data;
}

interface FileUploadResponse {
    item: {
        path: string,
        root: string,
        modified: number,
        size: number,
        permissions: string
    },
    print_started: boolean,
    print_queued: boolean,
    action: "create_file"
}

export const uploadFile = async (file: File) => {
  var formData = new FormData();

  formData.append('file', file as Blob);

  const response: FileUploadResponse = await axios.post('http://10.0.90.151/server/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
  return response.item;
}