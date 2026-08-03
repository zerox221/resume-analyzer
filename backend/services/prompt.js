function generateInterviewPrompt(resume, selfDescription, jobDescription) {
  return `
You are an expert Technical Recruiter, Senior Software Engineer, and Hiring Manager.

Your job is to analyze the candidate and return ONLY a JSON object that matches the required structure.

=====================================
RESUME
=====================================
${resume}

=====================================
SELF DESCRIPTION
=====================================
${selfDescription}

=====================================
JOB DESCRIPTION
=====================================
${jobDescription}

Analyze the resume carefully.

Compare the candidate with the job description.

Generate realistic interview preparation data.

Requirements:

1. Calculate a matchScore from 0 to 100.

2. Generate EXACTLY 10 technical interview questions.

Each technical question MUST contain:

- question
- intention
- answer

3. Generate EXACTLY 5 behavioral interview questions.

Each behavioral question MUST contain:

- question
- intention
- answer

4. Generate skillGap.

Each skillGap object must contain:

- skill
- severity

severity must ONLY be one of:

- low
- medium
- high

5. Generate a 7-day preparationPlan.

Each day MUST contain:

- day
- focus
- tasks

tasks must contain at least four strings.

IMPORTANT

Return ONLY valid JSON.

Do NOT return Markdown.

Do NOT use triple backticks.

Do NOT explain anything.

Do NOT wrap objects inside strings.

Every array MUST contain JSON OBJECTS.

Never return arrays of strings.

Use the following JSON format EXACTLY.

{
  "matchScore": 0,
  "message" : "write a message on the basis of user resume ex your profile is matching for this job like this dont write it to long short and direct like 10 to 15 words "

  "technicalQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],

  "behavioralQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],

  "skillGap": [
    {
      "skill": "",
      "severity": "low"
    }
  ],

  "preparationPlan": [
    {
      "day": 1,
      "focus": "",
      "tasks": [
        "",
        "",
        "",
        ""
      ]
    }
  ]
}

The response MUST be directly insertable into MongoDB without any modification.
`;
}

module.exports = generateInterviewPrompt;