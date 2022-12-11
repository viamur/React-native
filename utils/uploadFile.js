import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";

const uploadFile = async ({ path, photo, name = false }) => {
    try {
        // получаем путь
        const response = await fetch(photo);
        // переводим в формат другой для отправки
        const file = await response.blob();


        // делаем уникальный id
        const uniqueId = name ? name : Date.now().toString()

        const storageRef = ref(storage, `${path}/${uniqueId}`)
        // отправляем файл
        await uploadBytes(storageRef, file);

        // получаем ссылку
        const url = await getDownloadURL(storageRef);
        return url;

    } catch (error) {
        console.warn('uploadFile ERROR', error)
    }

}

export default uploadFile;


