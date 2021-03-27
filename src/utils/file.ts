import fs from "fs";

export const deleteFile = async (filename: string) => {
  // verificar se o arquivo existe no diretório
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  await fs.promises.unlink(filename);
};
