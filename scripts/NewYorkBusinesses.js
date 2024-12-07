import { getBusinesses } from "./database.js";

export const newYorkBusinessList = () => {
  let newYorkBusinessListHTML = "";
  const allBusinesses = getBusinesses();

  const inNY = (business) => {
    if (business.addressStateCode.toLocaleUpperCase() === "NY") {
      return true;
    } else false;
  };

  const newYorkBusinesses = allBusinesses.filter(inNY);

  console.log(newYorkBusinesses);
  newYorkBusinesses.forEach((business) => {
    newYorkBusinessListHTML += `      <section>
        <h3>${business.companyName}</h3>

        <div class="business__address">${business.addressFullStreet}</div>
        <div class="business__address">
          ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
        </div>
      </section>`;
  });
  return newYorkBusinessListHTML;
};
