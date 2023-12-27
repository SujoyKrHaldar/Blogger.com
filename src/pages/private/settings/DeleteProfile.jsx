import { SettingsTemplate } from "../../../components";

function DeleteProfile() {
  return (
    <SettingsTemplate title="Delete Account">
      <div className="max-w-xl space-y-6">
        <p className=" leading-7">
          Would you like to delete your account? This account contains 1338
          posts. Deleting will permanently erase your data and everything
          associated with your account.
        </p>
        <p className="text-red-600 font-semibold py-2 px-6 bg-red-100 w-fit rounded-xl cursor-pointer">
          I want to delete my Account
        </p>
      </div>
    </SettingsTemplate>
  );
}

export default DeleteProfile;
