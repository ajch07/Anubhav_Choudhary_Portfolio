
// Simple Card and Button components with glassmorphism and animation
function Card({ children, className }) {
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 hover:scale-[1.03] transition-transform duration-300 ${className || ""}`}>
      {children}
    </div>
  );
}
function CardContent({ children, className }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>;
}
function Button({ children, variant, href, ...props }) {
  const base = "px-4 py-2 rounded-lg font-semibold transition-all duration-300";
  const styles =
    variant === "outline"
      ? "border border-cyan-400 bg-transparent text-cyan-300 hover:bg-cyan-900/30"
      : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 shadow-lg";
  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles} inline-block text-center`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}

export default function GenAIPortfolio() {
  return (
    <main className="relative min-h-screen font-sans bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] text-gray-100 overflow-x-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-cyan-900 via-purple-900 to-black opacity-80" />
  
  {/* Hero Section */}
  <section className="flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-24 bg-white/5 backdrop-blur-xl rounded-b-3xl shadow-2xl mb-10 sm:mb-16 mx-auto w-full max-w-4xl animate-fade-in px-4">
    <img
      src="/photo.jpg"
      alt="AI Illustration"
      className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-xl mb-6 sm:mb-8 object-cover border-4 border-cyan-400 animate-fade-in"
    />
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 py-4 leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-mono tracking-wide animate-fade-in">
      Generative AI Engineer
    </h1>
    <p className="text-base sm:text-xl text-cyan-100 max-w-2xl mx-auto mb-4 animate-fade-in">
      I build intelligent systems with LLMs, vector search, RAG pipelines, and AI agents that automate real-world workflows.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 animate-fade-in">
      <Button variant="outline" href="https://www.linkedin.com/in/anubhav-choudhary-31121b218/">Connect on LinkedIn</Button>
      <Button href="mailto:uditnousran@gmail.com">Contact Me</Button>
    </div>
  </section>

  {/* Tech Stack */}
  <section className="mb-10 sm:mb-16 animate-fade-in-slow px-4">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
      <span role="img" aria-label="tools">🛠</span> Tech Stack
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
      {[
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name:"React", icon: "https://img.icons8.com/?size=100&id=35989&format=png&color=000000" },
        { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "LLMs (GPT-4, Mistral)", icon: "https://img.icons8.com/?size=100&id=kLkU4c9YfQNM&format=png&color=000000" },
        { name: "RAG", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712038.png" },
        { name: "Vector DBs (pgvector, Faiss)", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png" },
        { name: "LoRA", icon: "https://img.icons8.com/?size=100&id=hoMvniioSFKm&format=png&color=000000" },
        { name: "OpenAI API", icon: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" }
      ].map((skill, i) => (
        <div key={i} className="bg-white/10 backdrop-blur rounded-xl shadow flex items-center gap-3 p-3 sm:p-4 hover:scale-105 transition-transform duration-300">
          <img src={skill.icon} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 rounded" />
          <span className="text-cyan-100 font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>

  {/* Projects */}
  <section className="mb-10 sm:mb-16 animate-fade-in-slow px-4">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
      <span role="img" aria-label="bulb">💡</span> Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
      <Card>
        <img
          src="/20250731_0411_AI PDF Tool Interface_remix_01k1eqvqdkepx808y49n632aqk.png"
          alt="ChatUrPDF"
          className="w-full h-44 sm:h-56 object-cover rounded-t-2xl"
        />
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="pdf">📄</span> AI-Powered ChatUrPDF
          </h3>
          <p className="text-sm text-cyan-100 mb-4">
            Let the user upload their PDF and have a conversation over that using RAG + vector search.
          </p>
          <ul className="text-sm text-cyan-200 mb-4 list-disc pl-5">
            <li>LangChain + FastAPI backend</li>
            <li>pgvector for similarity search</li>
            <li>Embedding of PDF as per User Demands</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button href="https://github.com/ajch07/ChatUrPDF">🔗 GitHub</Button>
            <Button variant="outline" href="https://www.loom.com/share/e26daba646cd463ba708287d73539304">🚀 Demo</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <img
          src="/Screenshot (52).png"
          alt="Email RFQ Automation"
          className="w-full h-44 sm:h-56 object-cover rounded-t-2xl"
        />
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="mail">📧</span> Cold Email Generator Agent
          </h3>
          <p className="text-sm text-cyan-100 mb-4">
            Scrap about us page of a Company, get recipient email, and drafts customized email using LLM agent.
          </p>
          <ul className="text-sm text-cyan-200 mb-4 list-disc pl-5">
            <li>Google OAuth integration</li>
            <li>LangChain agent toolset</li>
            <li>Prompt chaining with memory</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button href="https://github.com/ajch07/email-generator-ai">🔗 GitHub</Button>
            <Button variant="outline" href="https://www.loom.com/share/dc00d1b299da4b4d839054b8d94eadba?sid=8f949799-7802-4292-96ef-3e98fbd87ece">🚀 Demo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* What I Bring */}
  <section className="mb-10 sm:mb-16 animate-fade-in-slow px-4">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
      <span role="img" aria-label="rocket">🚀</span> What I Bring
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
      <Card>
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="Automation" className="w-6 h-6 sm:w-7 sm:h-7" />
            Automation & Integration
          </h3>
          <ul className="list-disc pl-5 text-cyan-100 mb-4">
            <li>Build automations with <b>n8n</b>, <b>CrewAI</b>, <b>Zapier</b>, <b>Twilio</b></li>
            <li>Integrate chatbots with CRM websites as widgets</li>
            <li>Connect workflows to <b>Supabase</b> and other modern backends</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <img src="https://img.icons8.com/?size=100&id=B2Ya5CJGtE7t&format=png&color=000000" alt="Azure" className="w-6 h-6 sm:w-7 sm:h-7" />
            Enterprise-Ready Deployments
          </h3>
          <ul className="list-disc pl-5 text-cyan-100 mb-4">
            <li>Deploy solutions using <b>Azure Web Services</b>, <b>Render</b>, <b>Vercel</b></li>
            <li>Evaluate models with <b>Azure AI Foundry</b></li>
            <li>Monitor safety with <b>Azure Content Safety</b></li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712038.png" alt="Prompt Engineering" className="w-6 h-6 sm:w-7 sm:h-7" />
            Prompt Engineering & Customization
          </h3>
          <ul className="list-disc pl-5 text-cyan-100 mb-4">
            <li>Design effective prompts for LLMs and agents</li>
            <li>Customize AI workflows for your unique business needs</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Value" className="w-6 h-6 sm:w-7 sm:h-7" />
            Value to Your Project
          </h3>
          <ul className="list-disc pl-5 text-cyan-100 mb-4">
            <li>End-to-end delivery: from prototype to production</li>
            <li>Seamless integration with your existing stack</li>
            <li>Focus on reliability, scalability, and user experience</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* Contact */}
  <section className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl mx-auto animate-fade-in-slow mb-10 px-4">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
      <span role="img" aria-label="mailbox">📬</span> Contact
    </h2>
    <p className="text-md text-cyan-100 mb-2">
      Let's collaborate! Reach out at <span className="font-medium">uditnousran@gmail.com</span>
    </p>
    <p className="text-md text-cyan-100">
      Or connect on{" "}
      <a
        href="https://www.linkedin.com/in/anubhav-choudhary-31121b218/"
        className="text-cyan-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
      </a>
    </p>
  </section>
</main>
  );
}

