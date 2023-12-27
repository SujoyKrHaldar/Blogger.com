import { SettingsTemplate } from "../../../components";

function ProfileSettings() {
  return (
    <SettingsTemplate title="Edit Profile">
      <div className="">
        <p>
          Keep your personal details private. Information you add here is
          visible to any who can view your profile.
        </p>
      </div>
    </SettingsTemplate>
  );
}

export default ProfileSettings;
