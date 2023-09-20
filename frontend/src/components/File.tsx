import byteSize from "byte-size";

interface DifferentFile {
    modified: Number;
    path: String;
    permissions: String;
    size: Number;
  }

interface FileProps {
    file: DifferentFile;
}


const File = ({ file }: FileProps) => {
    const formattedSize = byteSize(file.size as any)
    return (
        <div className="file">
            <h3>{file.path}</h3>
            <p>{`${formattedSize.value} ${formattedSize.unit}`}</p>
        </div>
    )
}

export default File;