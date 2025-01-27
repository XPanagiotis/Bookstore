function AboutUs() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="about-us">
        <h1>About our Project!!</h1>

        <h2>The Technologies that we used:</h2>
        <ul>
          <li>
            1.
            <strong> React</strong> for creating the interface.
          </li>
          <li>
            2.
            <strong> Vite</strong> for building the development and production
            builds of the frontend.
          </li>
          <li>
            3.
            <strong> MySQL</strong> to store the book’s data.
          </li>
          <li>
            4.
            <strong> Node.js</strong> and <strong>npm</strong> for managing
            dependencies and running the development server.
          </li>
          <li>
            5.
            <strong> Apache Tomcat</strong> for hosting the application.
          </li>
        </ul>

        <h2>Workflow</h2>

        <h3>Environment</h3>
        <ul>
          <li>
            We installed <strong>Node.js</strong> and <strong>npm</strong> for
            managing dependencies.
          </li>
          <li>
            We configured <strong>Vite</strong> with the React plugin.
          </li>
        </ul>

        <h3>Development Workflow</h3>
        <h4>Frontend Development:</h4>
        <ul>
          <li>
            We created components and managed the user interface with React.
          </li>
          <li>
            We created an entry point in <code>index.html</code> that references
            the <code>src/main.jsx</code> file, which initializes the React app.
          </li>
          <li>
            We did the styling using CSS files in the <code>src/styles</code>{" "}
            directory.
          </li>
        </ul>

        <h4>Backend Database:</h4>
        <ul>
          <li>
            Designed a MySQL database with a <code>books</code> table to store
            book data.
          </li>
          <li>Configured the backend server to connect to the database.</li>
        </ul>

        <h3>Production Workflow</h3>
        <ul>
          <li>
            Built the application for production using the{" "}
            <code>npm run build</code> command, which generates the{" "}
            <code>dist</code> directory.
          </li>
          <li>
            Copied the <code>dist</code> folder to the Apache Tomcat server for
            hosting.
          </li>
          <li>
            Configured Tomcat to serve the static files, allowing access to the
            app through a browser.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
