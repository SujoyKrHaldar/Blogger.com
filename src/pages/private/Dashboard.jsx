import { MetaTags } from "../../components";

function Dashboard() {
  return (
    <>
      <MetaTags
        title="Dashboard • Blogger.com"
        description="manage account"
        conicalRoute="/dashboard"
      />

      <section className="container py-24">
        <h2>Dashboard</h2>
      </section>
    </>
  );
}

export default Dashboard;
