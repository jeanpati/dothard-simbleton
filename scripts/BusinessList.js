import { getBusinesses } from "./database.js";
export const BusinessList = () => {
  const allBusinesses = getBusinesses();
  let businessHTML = "";

  allBusinesses.forEach((business) => {
    businessHTML += `
        <section class="business">
            <h3 class="business__name">${business.companyName}</h3>

            <div class="business__address">${business.addressFullStreet}</div>
            <div class="business__address">${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</div>
        </section>
        `;
  });
  return businessHTML;
};
