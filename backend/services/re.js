
// const response = {
//   "matchScore": 94,
//   "technicalQuestions": [
//     {
//       "question": "How do you manage complex application state in React, and when would you choose Context API over Redux or Redux-Saga?",
//       "intention": "Assess candidate's deep understanding of React state management paradigms and architectural decision-making.",
//       "answer": "Context API is ideal for lightweight, global application state such as user authentication themes or localization, avoiding prop drilling without extra overhead. Redux or Redux-Saga is preferred for large-scale applications with complex asynchronous data flows, heavy state transformations, predictable state history, and decoupled side-effect management using generators."
//     },
//     {
//       "question": "Explain how the Node.js Event Loop works and how asynchronous non-blocking operations are handled under the hood.",
//       "intention": "Evaluate backend core knowledge, asynchronous JavaScript concepts, and runtime mechanics.",
//       "answer": "The Node.js event loop runs on a single thread and processes non-blocking I/O tasks using phases (Timers, Pending Callbacks, Poll, Check, Close Callbacks). Asynchronous operations offload I/O tasks to the underlying C++ libuv thread pool or system OS kernel. Once completed, callbacks are pushed onto microtask (process.nextTick, Promises) or macrotask queues to be executed when the call stack clears."
//     },
//     {
//       "question": "What strategies do you use for indexing and performance optimization in MongoDB when querying millions of documents?",
//       "intention": "Test database engineering capabilities, query optimization, and scalability knowledge.",
//       "answer": "Optimization strategies include creating single-field, compound, and multikey indexes targeting frequently queried fields, adhering to the ESR (Equality, Sort, Range) rule. Utilizing `explain('executionStats')` helps identify query bottlenecks and prevent full collection scans. Other techniques include query projection to limit returned fields, schema denormalization where appropriate, and leveraging aggregation pipelines efficiently."
//     },
//     {
//       "question": "How do you implement secure user authentication and session management in a modern MERN stack application?",
//       "intention": "Verify implementation skills regarding API security, token management, and cryptographic best practices.",
//       "answer": "Authentication is typically achieved using JSON Web Tokens (JWT) combined with bcrypt for password hashing. Passwords are salted and hashed prior to database persistence. Upon login, an access token (short-lived) is returned alongside a refresh token (stored in an HTTP-only, Secure, SameSite cookie). express-validator sanitizes inputs, while CORS middleware controls allowed origins."
//     },
//     {
//       "question": "How do you structure Express.js middleware for centralized error handling and request validation?",
//       "intention": "Gauge backend architectural skills, clean code practices, and robust application design.",
//       "answer": "Request validation is performed using validation middleware (e.g., express-validator or Joi) prior to reaching controller logic. Centralized error handling uses custom Error classes extending the native Error object, passing errors to `next(err)`. A single global error-handling middleware `(err, req, res, next)` intercepts all unhandled or explicit errors, returning consistent HTTP status codes and standardized JSON error payloads."
//     },
//     {
//       "question": "What is the difference between embedding and referencing documents in MongoDB schema design, and how do you decide between them?",
//       "intention": "Check data modeling mastery in NoSQL databases for real-world application contexts.",
//       "answer": "Embedding nested objects inside a parent document is best for 1:1 or 1:Few relationships, offering faster read performance via single-query fetches. Referencing uses object IDs across collections, suitable for 1:Many or Many:Many relationships, avoiding MongoDB's 16MB document size limit and reducing data duplication when data updates independently."
//     },
//     {
//       "question": "What techniques do you use to optimize frontend application performance and initial page load times in React?",
//       "intention": "Determine frontend engineering depth in performance profiling, code splitting, and bundle size management.",
//       "answer": "Key techniques include code splitting using `React.lazy()` and `Suspense`, dynamic imports via Webpack, memoizing expensive computations with `useMemo` and sub-components with `React.memo`, implementing virtualized lists for large datasets, optimizing image assets via CDN, and removing unused dependencies."
//     },
//     {
//       "question": "How do you transition testing from legacy frameworks like Enzyme to React Testing Library, and what philosophy shifts are required?",
//       "intention": "Explore testing experience based on resume details and modern frontend testing standards.",
//       "answer": "Enzyme focused on testing implementation details (component state, internal methods, instance props). React Testing Library enforces testing components from the end-user's perspective (querying DOM elements by accessibility roles, labels, and text content). Transitioning involves replacing shallow rendering assertions with user events (`userEvent`), ensuring tests remain resilient to refactoring."
//     },
//     {
//       "question": "How do CORS and security middleware like Helmet work together to protect an Express REST API?",
//       "intention": "Assess REST API security awareness and web domain security protocols.",
//       "answer": "CORS (Cross-Origin Resource Sharing) sets HTTP headers telling browsers which domains can access backend resources. Helmet enhances security by setting dynamic HTTP response headers such as Content-Security-Policy, X-Frame-Options to block clickjacking, Strict-Transport-Security for HTTPS enforcement, and disabling X-Powered-By to conceal server technologies."
//     },
//     {
//       "question": "Describe your approach to building and consuming RESTful APIs using standard HTTP methods and status codes.",
//       "intention": "Verify fundamental full-stack web API contract design principles.",
//       "answer": "REST APIs should use resource-oriented endpoints with proper HTTP verbs: GET for retrieval, POST for creation, PUT/PATCH for full/partial updates, and DELETE for removal. Standardized HTTP response codes indicate outcome (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error) accompanied by structured JSON payloads."
//     }
//   ],
//   "behavioralQuestions": [
//     {
//       "question": "Tell me about a time you mentored junior developers or students. How did you adapt your style for different skill levels?",
//       "intention": "Evaluate leadership, communication flexibility, and mentorship experience directly referencing your experience at AttainU.",
//       "answer": "At AttainU, I taught web development to over 150 students with varied backgrounds. I assessed individual learning paces through coding challenges and Trello progress tracking. For beginners, I used concrete real-world metaphors (e.g., comparing API routes to restaurant menus) and broken-down debugging sessions, while for advanced learners, I encouraged self-guided problem solving and deep-dive code reviews."
//     },
//     {
//       "question": "Describe a scenario where you had to quickly adapt to a technology stack or framework you were not previously familiar with.",
//       "intention": "Assess adaptability and learning velocity as highlighted in your self-description.",
//       "answer": "When transitioning client websites at XBOT IT Technologies, I led a shift to Vue.js and SPA architecture to improve performance. Although primarily experienced with vanilla JavaScript, I spent time studying core Vue reactive principles, built small proof-of-concept prototypes, and introduced component-based state patterns, ultimately increasing client conversion rates by 65%."
//     },
//     {
//       "question": "How do you manage communication and project delivery when working in remote environments across different time zones?",
//       "intention": "Examine async communication abilities, self-management, and remote tool mastery.",
//       "answer": "I rely heavily on over-communication and asynchronous workflows. I use Trello for clear task breakdown with explicit acceptance criteria, record video overviews (Loom/Zoom) for complex feature handoffs, document API specs in Postman, and keep Slack updated with daily progress blockers to ensure team alignment across time zones."
//     },
//     {
//       "question": "Tell me about a time you encountered a severe production bug or deployment failure. How did you resolve it?",
//       "intention": "Measure problem-solving under pressure, debugging methodology, and critical incident recovery.",
//       "answer": "During a release on DigitalOcean, a CORS miss-configuration combined with missing environment variables broke payment checkout integrations. I immediately rolled back the deployment to the last stable build using Git tags, analyzed server logs, corrected the CORS white-list and missing environment keys in cloud configs, added regression integration tests, and re-deployed successfully."
//     },
//     {
//       "question": "How do you handle technical disagreements during code reviews with team members?",
//       "intention": "Determine interpersonal skills, teamwork, and commitment to code quality.",
//       "answer": "I approach code reviews objectively by focusing on software engineering principles rather than personal preference. I reference standard style guides, performance benchmarks, or readability metrics. If a disagreement persists, I suggest scheduling a brief technical sync or building a quick micro-benchmark to let empirical data guide the final decision."
//     }
//   ],
//   "skillGap": [
//     {
//       "skill": "React Testing Library (Migrating away from legacy Enzyme)",
//       "severity": "medium"
//     },
//     {
//       "skill": "TypeScript on Node.js / Express backend API modeling",
//       "severity": "low"
//     },
//     {
//       "skill": "Docker Containerization & Kubernetes Orchestration",
//       "severity": "medium"
//     },
//     {
//       "skill": "Next.js / Modern Full-Stack SSR Patterns",
//       "severity": "low"
//     }
//   ],
//   "preparationPlan": [
//     {
//       "day": 1,
//       "focus": "React & Modern State Management Refresh",
//       "tasks": [
//         "Review React 18 hooks, custom hooks pattern, and component performance optimization tools (useMemo, useCallback, React.memo).",
//         "Refactoring Enzyme assertions to React Testing Library queries focusing on accessibility roles.",
//         "Implement a sample React single page application utilizing Context API and Redux Toolkit.",
//         "Review modern frontend build tooling features like Webpack dynamic imports and code-splitting."
//       ]
//     },
//     {
//       "day": 2,
//       "focus": "Node.js Core Architecture & Express Mastery",
//       "tasks": [
//         "Study Node.js Event Loop phases, EventEmitters, Streams, and Buffer handling.",
//         "Construct custom centralized error-handling middleware in Express with standardized JSON responses.",
//         "Implement robust request input validation using express-validator and express-rate-limit.",
//         "Build a sample async handler wrapper to handle uncaught promises cleanly in route controllers."
//       ]
//     },
//     {
//       "day": 3,
//       "focus": "MongoDB Database Design & Performance Optimization",
//       "tasks": [
//         "Practice schema design strategies: embedding vs referencing patterns across various use cases.",
//         "Write complex MongoDB aggregation pipelines using $lookup, $unwind, $group, and $project.",
//         "Utilize explain('executionStats') to optimize queries, compound indexes, and multikey indexes.",
//         "Review Mongoose middleware hooks (pre/post save/validate) and populate methods."
//       ]
//     },
//     {
//       "day": 4,
//       "focus": "API Security, Authentication, & Integration",
//       "tasks": [
//         "Implement JWT authentication with refresh token rotation using HTTP-only cookies.",
//         "Configure CORS policies and Helmet HTTP headers securely in Express applications.",
//         "Review third-party API integration patterns (Stripe, Razorpay payment flow handshakes).",
//         "Implement password hashing best practices using bcrypt with proper salt rounds."
//       ]
//     },
//     {
//       "day": 5,
//       "focus": "Testing & Quality Assurance",
//       "tasks": [
//         "Write unit tests for Node/Express controller functions using Jest and Supertest.",
//         "Write component integration tests in React Testing Library using fireEvent and userEvent.",
//         "Configure Mock Service Worker (MSW) or Jest mocks for external payment API calls.",
//         "Review code coverage reports and aim for edge-case coverage on critical paths."
//       ]
//     },
//     {
//       "day": 6,
//       "focus": "System Design & Deployment Architecture",
//       "tasks": [
//         "Practice high-level system design for modern web apps (CDN, load balancing, caching with Redis).",
//         "Review deployment setups on cloud providers like DigitalOcean droplets and AWS S3 bucket storage.",
//         "Setup basic CI/CD pipeline scripts using GitHub Actions for automated linting and test execution.",
//         "Review RESTful API design standards and modern OpenAPI / Swagger documentation."
//       ]
//     },
//     {
//       "day": 7,
//       "focus": "Behavioral Preparation & Mock Interviews",
//       "tasks": [
//         "Prepare structured STAR method stories covering teaching/mentorship at AttainU.",
//         "Draft responses highlighting tech leadership and 65% conversion increase achievements at XBOT.",
//         "Conduct self-timed mock technical interviews answering React, Node, and MongoDB core questions.",
//         "Finalize concise, punchy personal elevator pitch tailoring MERN experience to the target position."
//       ]
//     }
//   ]
// }

// // console.log(response.technicalQuestions);