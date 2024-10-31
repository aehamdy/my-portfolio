import createWordFileStructure from "./createWordFileStructure"
import downloadWordFile from "./downloadWordFile";

const handleFileDownload = async () => {
    const doc = createWordFileStructure();

    await downloadWordFile(doc);
}

export default handleFileDownload;