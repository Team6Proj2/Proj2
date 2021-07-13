module.exports = {
  format_date: (date_created) => {
    // Format date as MM/DD/YYYY
    return date_created.toLocaleDateString();
  },
  format_amount: (total_amount) => {
    // format large numbers with commas
    return parseInt(total_amount).toLocaleString();
  },
};
