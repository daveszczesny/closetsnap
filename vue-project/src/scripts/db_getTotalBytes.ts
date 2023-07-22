
import { getStorage, ref, listAll, getMetadata } from "firebase/storage";

/*

getTotalBytesUsed function, returns total bytes used by a user

*/


/**
 * 
 * @param folderPath 
 * @returns totalBytes | 0
 */

export async function getTotalBytesInFolder(folderPath: any) {
    const storage = getStorage();

    try {
        const folderRef = ref(storage, folderPath);
        const folderFiles = await listAll(folderRef);

        let totalSizeInBytes = 0;

        for (const fileRef of folderFiles.items) {
            const fileMetadata = await getMetadata(fileRef);
            totalSizeInBytes += fileMetadata.size;
        }

        for (const folderPrefix of folderFiles.prefixes) {
            const subFolderPath = folderPrefix.fullPath;
            const subfolderBytes = await getTotalBytesInFolder(subFolderPath);
            totalSizeInBytes += subfolderBytes;
        }

        return totalSizeInBytes;
    } catch (error) {
        console.error("Error calculating bytes in folder: ", error);
        return 0;
    }
}