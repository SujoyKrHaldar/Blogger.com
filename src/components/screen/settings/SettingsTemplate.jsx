/* eslint-disable react/prop-types */
function SettingsTemplate({ title, children }) {
  return (
    <div className="pt-28 pb-16 px-8 space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}

export default SettingsTemplate;
