import { Packer } from "docx";
import { saveAs } from "file-saver";
import personalInfo from "./personalInfo";

const downloadWordFile = async (doc) => {

    // Save the document as a .docx file
    const blob = await Packer.toBlob(doc); // Changed toBlob for browser environment

    saveAs(blob, `${personalInfo.firstName}${personalInfo.middleName}'s_CV.docx`); // Use saveAs to download the blob as a file
}

export default downloadWordFile;