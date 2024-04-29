export const getDateId = (): string => {
  const currentDate = new Date();

  const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayId = day[currentDate.getDay()];
  const date = currentDate.getDate();
  const monthId = month[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return dayId + ", " + date + " " + monthId + " " + year;
};

export const getDateAPI = (): string => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedMonth = month < 10 ? "0" + month : month.toString();
  const formattedDay = day < 10 ? "0" + day : day.toString();

  return `${year}/${formattedMonth}/${formattedDay}`;
};
