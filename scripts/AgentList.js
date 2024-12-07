import { getBusinesses } from "./database.js";

export const AgentList = () => {
  const allBusinesses = getBusinesses();

  const agentsArray = allBusinesses.map((business) => {
    return `<section>
      <h3>
        ${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}
      </h3>
      <div>${business.companyName}  ${business.phoneWork}</div>
    </section>`;
  });

  const joinedAgentArray = agentsArray.join("");
  return joinedAgentArray;
};
