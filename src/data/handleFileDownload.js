import { createWordFileStructure } from "./createWordFileStructure"
import { downloadWordFile } from "./downloadWordFile";

export const handleFileDownload = async () => {
    const doc = createWordFileStructure();

    await downloadWordFile(doc);
}