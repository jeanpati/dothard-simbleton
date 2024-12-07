import { getBusinesses } from "./database.js";

export const AgentList = () => {
  const allBusinesses = getBusinesses();
  let agentHTML = "";

  const agentsArray = allBusinesses.map((business) => {
    console.log(business.purchasingAgent.nameFirst);
    return `<section>
      <h3>
        ${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}
      </h3>
      <div>${business.companyName}  ${business.phoneWork}</div>
    </section>`;
  });

  console.log(agentsArray);

  const joinedAgentArray = agentsArray.join("");
  return joinedAgentArray;
};
