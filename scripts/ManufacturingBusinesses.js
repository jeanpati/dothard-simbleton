import { getBusinesses } from "./database.js";

export const ManufacturingList = () => {
  const allBusinesses = getBusinesses();
  const isManufacturing = (business) =>
    business.companyIndustry.toLocaleLowerCase() === "manufacturing";

  const manufacturingBusinesses = allBusinesses.filter(isManufacturing);
  let manufacturingHTML = "";

  manufacturingBusinesses.forEach((business) => {
    manufacturingHTML += `      <section>
        <h3>${business.companyName}</h3>
        <div class="business__address">
          ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
        </div>
      </section>`;
  });
  return manufacturingHTML;
};
