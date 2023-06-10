import fs from "fs";
import path from "path";
import { promisify } from "util";
const unlinkAsync = promisify(fs.unlink);

export const unlinkFile = async (folder_name: string, file_name: string) => {
  if (fs.existsSync(path.join(__dirname, `../${folder_name}/${file_name}`))) {
    await unlinkAsync(path.join(__dirname, `../${folder_name}/${file_name}`));
  }
};
