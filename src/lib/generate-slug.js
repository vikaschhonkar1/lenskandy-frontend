export const generateSlug = (text1, text2, text3) => {
  const removeSpecialChars = (str) =>
    str
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  const slug1 = removeSpecialChars(text1);
  const slug2 = removeSpecialChars(text2);
    const slug3 = removeSpecialChars(text3);

  const mergedSlug = `${slug1}-${slug2}_${slug3}`;

  const url =  mergedSlug;
  return url;
};
