/* eslint-disable react/prop-types */
import CtaBtn from "../../shared/CtaBtn";
import Image from "../../shared/Image";

function ProfileFallbackUI({
  imgSrc,
  title,
  description,
  redirectTo,
  redirectText,
}) {
  return (
    <div className="text-center space-y-4 py-16 pt-8 border border-gray-400">
      <div className="w-[250px] h-auto mx-auto">
        <Image src={imgSrc} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="max-w-lg mx-auto  leading-7">{description}</p>
      <CtaBtn url={redirectTo} className="text-white">
        {redirectText}
      </CtaBtn>
    </div>
  );
}

export default ProfileFallbackUI;
