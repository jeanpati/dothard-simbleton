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

document
  .querySelector("#content")
  .addEventListener("keypress", (keyPressEvent) => {
    const companySearchResultArticle =
      document.querySelector(".foundBusinesses");

    if (keyPressEvent.charCode === 13) {
      /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

      const allBusinesses = getBusinesses();
      const foundBusiness = allBusinesses.find(
        (business) =>
          business.companyName
            .toLocaleLowerCase()
            .includes(keyPressEvent.target.value.toLocaleLowerCase()) ||
          keyPressEvent.target.value ===
            business.companyName.toLocaleLowerCase()
      );

      companySearchResultArticle.innerHTML = `<section class="business">
            <h4>${foundBusiness.companyName}</h4>

            <div class="business__address">${foundBusiness.addressFullStreet}</div>
            <div class="business__address">${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</div>
        </section>
        `;
    }
  });
