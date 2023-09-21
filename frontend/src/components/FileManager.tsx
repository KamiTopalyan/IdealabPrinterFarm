import * as FileApi from "../api/file-api";
import { useEffect, useState } from "react";
import File from "./File";
import "../styles/File.css"
import { AiOutlinePlus } from "react-icons/ai";

const FileManager = () => {

  const [files, setFiles] = useState<FileApi.FormattedFile[]>();

  useEffect(() => {
    async function fetchFiles() {
      const filesFromServer: FileApi.FormattedFile[] = [
          { modified: 0, path: "test.gcode", permissions: "", size: 103427361 },
          { modified: 0, path: "eventestier.gcode", permissions: "", size: 123726123 },
        ]
      setFiles(filesFromServer);
    }
    fetchFiles();
  }, []) 



    const createTable = (files: FileApi.FormattedFile[]) => {
      const data = files.map((file) => {
        return (
          <File file={file}></File>
        );
      });

      return (
        <table>
          <tr>
            <th>File Name</th>
            <th>File Size</th>
          </tr>
          {data}
        </table>
      );
    };
    const onSubmit = async (data: File) => {
      try {
        const response = await FileApi.uploadFile(data)
        setFiles([...files!, response])
      } catch (e) {
        console.log(e)
      }
    }
    return (
      <div>
        <h1>Files</h1>
        <input
          type="file"
          id="file"
          className="inputfile"
          accept=".gcode"
          onChange={(e) =>
            e.target.files
              ? onSubmit(e.target.files[0])
              : alert("upload failed")
          }
        />
        <label htmlFor="file" className="uploadfile">
          <span>Add File</span>
          <AiOutlinePlus />
        </label>

        {files && files.length! !== 0 ? (
          createTable(files)
        ) : (
          <p>No Files Found</p>
        )}
      </div>
    );
}

export default FileManager;