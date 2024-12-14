export const makeReadableDate = (date, time = false) => {
  const props = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (time) {
    props["hour"] = "2-digit";
    props["minute"] = "2-digit";
    props["second"] = "2-digit";
  }
  return new Date(date).toLocaleDateString("en-us", props);
};

export const makeMonetaryNumber = (number) =>
  typeof Number(number) != "number"
    ? number
    : `₦${makeFormattedNumber(Number(number))}`;

export const makeFormattedNumber = (number) =>
  typeof Number(number) != "number"
    ? number
    : Number(number ?? 0).toLocaleString();

export const makeFirstCharUpper = (mainString = "", separator = "_") =>
  mainString
    .split(separator)
    .map((string) =>
      string
        .split("")
        .map((char, charKey) =>
          charKey === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");

export const clipText = (mainString = "", length = 12) =>
  mainString.length <= length
    ? mainString
    : `${mainString.substring(0, length)}...`;
