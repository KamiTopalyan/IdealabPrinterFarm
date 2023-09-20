import * as FileApi from "../api/file-api";
import { useEffect, useState } from "react";
import File from "./File";
import "../styles/File.css"

const FileManager = () => {

  const [files, setFiles] = useState<FileApi.FileReturn>();

  useEffect(() => {
    async function fetchFiles() {
      const filesFromServer = await FileApi.getFiles();
      if (filesFromServer) setFiles(filesFromServer);
    }
    fetchFiles();
    
  }, []) 

    const onSubmit = (data: File) => FileApi.uploadFile(data)
    return (
      <div>
        <h1>Files</h1>  
        <input type="file" accept=".gcode" onChange={(e) => 
          e.target.files ? onSubmit(e.target.files[0]) : console.log("upload failed")
        }/>

        {files ? files["result"].map((file) => (
          <File file={file}/>
        ))
          :
        <p>No files</p>
        }
      </div>
    );
}

export default FileManager;