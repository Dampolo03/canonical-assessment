import moment from "moment";

export const formatDate = (date: string) => {
  let dates = new Date(date);
  let newdate = moment(dates);
  return newdate.format("DD MMMM YYYY");
};
