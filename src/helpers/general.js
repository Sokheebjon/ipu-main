export const getMediaUrl = (folder, name) => {
  return process.env.REACT_APP_MEDIA_URL + folder + "/" + name;
};

export const IsValidPhoneFormat = (phone) => {
  let clearPhone = clearPhoneNumber(phone);

  // return !!clearPhone.match(/^(\+998)?(998)?(\s)?\d{2}(\s)?\d{3}(\s)?\d{4}$/)
  return !!clearPhone.match(/^(998)(\s)?\d{2}(\s)?\d{3}(\s)?\d{4}$/);
};

export const convertToPrice = (number) =>
  (number + "").split(/(?!^)(?=(?:\d{3})+(?:\.|$))/).join(" ");

export const buildQueryData = (data) => {
  let arr = [];

  for (const [key, value] of Object.entries(data)) {
    arr.push(`${key}=${value}`);
  }

  return arr.join("&");
};

export const clearPhoneNumber = (phone) =>
  phone.replace(/(\s|\+|\(|\)|-|\_)/g, "");

export const getName = (item, locale = "") => {
  if (!item) return "";
  if (!!locale) {
    let str = (item[`name_` + locale] || item.name).toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }
  let str = (item.name || "").toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
};
export const getProductName = (item, name = "name", locale = "") => {
  console.timeLog(item);
  if (!item) return "";

  if (!!locale) {
    let str = item[name + `_` + locale] || item.name_rus;
    return str;
  }

  // return `${item.description_rus} ${item.model}`;
  // return `${item.name_rus}`;

  if (!!locale) {
    return `${item.description_rus} ${item.model}`;
    return item[`name_` + locale] || item.name;
  }
  return `${item.description_rus} ${item.model}`;
  return item.name;
};

export const getMediaPATH = (folder, file) => {
  if (!folder || !file) {
    return "https://img.icons8.com/ios-filled/100/000000/nike.png";
  }

  return `${process.env.REACT_APP_MEDIA_BASE}/${folder}/${file}`;
};

export const sortSizes = (sizes) => {
  let numeric = sizes.filter((x) => x.size.match("^((?![a-zA-Zа-яА-Я]).)*$"));
  let notNumeric = sizes.filter((x) => x.size.match("[a-zA-Zа-яА-Я]"));

  const ORDER = [
    "one size",
    "xxxs",
    "xxxs/xxs",
    "xxs/xxxs",
    "xxs",
    "xxs/xs",
    "xs/xxs",
    "xs",
    "xs/s",
    "s/sx",
    "s",
    "s/m",
    "m/s",
    "m",
    "m/l",
    "l/m",
    "l",
    "xl/l",
    "l/xl",
    "xl",
    "2xl",
    "xxl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
  ];

  notNumeric.sort((a, b) => {
    a.size = a.size.toLowerCase();
    b.size = b.size.toLowerCase();

    let nra = parseInt(a.size);
    let nrb = parseInt(b.size);

    if (ORDER.indexOf(a.size) != -1) nra = NaN;
    if (ORDER.indexOf(b.size) != -1) nrb = NaN;

    if (nrb === 0) return 1;
    if ((nra && !nrb) || nra === 0) return -1;
    if (!nra && nrb) return 1;
    if (nra && nrb) {
      if (nra == nrb) {
        return a.size
          .substr(("" + nra).length)
          .localeCompare(a.size.substr(("" + nra).length));
      } else {
        return nra - nrb;
      }
    } else {
      return ORDER.indexOf(a.size) - ORDER.indexOf(b.size);
    }
  });

  numeric.sort((a, b) => {
    a.size = a.size.toLowerCase();
    b.size = b.size.toLowerCase();

    let nra = parseInt(a.size);
    let nrb = parseInt(b.size);

    if (ORDER.indexOf(a.size) != -1) nra = NaN;
    if (ORDER.indexOf(b.size) != -1) nrb = NaN;

    if (nrb === 0) return 1;
    if ((nra && !nrb) || nra === 0) return -1;
    if (!nra && nrb) return 1;
    if (nra && nrb) {
      if (nra == nrb) {
        return a.size
          .substr(("" + nra).length)
          .localeCompare(a.size.substr(("" + nra).length));
      } else {
        return nra - nrb;
      }
    } else {
      return ORDER.indexOf(a.size) - ORDER.indexOf(b.size);
    }
  });

  return [...notNumeric, ...numeric];
};
