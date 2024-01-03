import { PasswordUpdateForm, SettingsTemplate } from "../../../components";

function AccountSettings() {
  return (
    <SettingsTemplate title="Account">
      <div className="space-y-6">
        <p>Make changes to your personal information or account type.</p>

        <PasswordUpdateForm />
      </div>
    </SettingsTemplate>
  );
}

export default AccountSettings;
