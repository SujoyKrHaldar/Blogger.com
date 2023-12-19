/* eslint-disable react/prop-types */
function SettingsTemplate({ title, children }) {
  return (
    <section className="pt-28 px-8 space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </section>
  );
}

export default SettingsTemplate;
