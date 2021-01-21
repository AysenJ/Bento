const today = new Date();
const Hr = today.getHours();

if (Hr >= 19 || Hr < 5) {
  enableDark();
} else {
  disableDark();
}
