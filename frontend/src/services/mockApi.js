const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockChatRequest = async (message, onStepUpdate) => {

  // Step 0: Retrieval Agent
  if (onStepUpdate) onStepUpdate(0, 'active', 'Connecting to policy vector index...');
  await delay(500);

  if (onStepUpdate) onStepUpdate(0, 'processing', 'Searching semantic vector database...');
  await delay(700);

  if (onStepUpdate) onStepUpdate(0, 'completed', 'Relevant policy clauses retrieved.');

  // Step 1: Compliance Evaluation Agent
  if (onStepUpdate) onStepUpdate(1, 'active', 'Parsing retrieved policy clauses...');
  await delay(600);

  if (onStepUpdate) onStepUpdate(1, 'processing', 'Evaluating compliance constraints...');
  await delay(700);

  if (onStepUpdate) onStepUpdate(1, 'completed', 'Compliance evaluation completed.');

  // Step 2: Risk Analysis Agent
  if (onStepUpdate) onStepUpdate(2, 'active', 'Analyzing risk factors...');
  await delay(500);

  if (onStepUpdate) onStepUpdate(2, 'processing', 'Generating confidence scores...');
  await delay(600);

  if (onStepUpdate) onStepUpdate(2, 'completed', 'Risk analysis completed.');

  // Step 3: Summary Generation Agent
  if (onStepUpdate) onStepUpdate(3, 'active', 'Drafting structured response...');
  await delay(500);

  if (onStepUpdate) onStepUpdate(3, 'processing', 'Formatting citations and summaries...');
  await delay(500);

  if (onStepUpdate) onStepUpdate(3, 'completed', 'Final response generated.');

  // REAL BACKEND CALL
  const response = await fetch(
    "https://genai-policy-backend-424955378865.asia-south1.run.app/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    }
  );

  const data = await response.json();

  return {
    answer: data.final_response,

    riskLevel:
      data.is_compliant === true
        ? "low"
        : "high",

    confidence: 94,
    
      citations: [
    {
      id: "policy_1",
      title: "University Placement Policy",
      section: "Retrieved Policy Clauses",
      page: "Policy DB",
      url: "#",
      context: data.reasoning || "Policy reasoning generated successfully.",
      policyNotes: "Retrieved from semantic vector search."
    }
],

    
  };
};