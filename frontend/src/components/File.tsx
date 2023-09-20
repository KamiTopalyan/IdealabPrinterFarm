import byteSize from "byte-size";

interface FormattedFile {
    modified: Number;
    path: String;
    permissions: String;
    size: Number;
}

interface FileProps {
    file: FormattedFile;
}


const File = ({ file }: FileProps) => {
    const formattedSize = byteSize(file.size as any)
    return (
        <tr>
            <td>{file.path}</td>
            <td>{`${formattedSize.value} ${formattedSize.unit}`}</td>
        </tr>
    )
}

export default File;