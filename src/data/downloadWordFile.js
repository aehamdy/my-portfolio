import { Packer } from "docx";
import { saveAs } from "file-saver";

export const downloadWordFile = async (doc) => {

    // Save the document as a .docx file
    const blob = await Packer.toBlob(doc); // Changed toBlob for browser environment

    saveAs(blob, "CV.docx"); // Use saveAs to download the blob as a file
    
}