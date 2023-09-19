import { useForm } from "react-hook-form";
import { uploadFile } from "../api/file-api";
type RegisterProps = {
  file: FileList;
};
const FileManager = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<RegisterProps>()

    const onSubmit = handleSubmit((data) => uploadFile(data.file[0]));


    return (
      <div>
        <h1>Files</h1>
        <form onSubmit={onSubmit}>
          <input {...register("file")} type="file" />
          <input type="submit" />
        </form>
      </div>
    );
}

export default FileManager;