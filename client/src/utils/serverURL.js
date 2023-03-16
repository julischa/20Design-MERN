const serverURL =
  process.env.ENV === "production"
    ? "https://20-design-mern.vercel.app"
    : "http://localhost:3000";

export { serverURL };
