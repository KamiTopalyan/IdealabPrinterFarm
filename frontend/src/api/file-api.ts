import axios from 'axios';





export const uploadFile = async (file: File) => {

    var formData = new FormData();
    var reader = new FileReader();

    formData.append('file', file as Blob);

    axios.post('http://localhost:3001/api/upload', formData, {
            headers: {
      'Content-Type': 'multipart/form-data'
    }})
}