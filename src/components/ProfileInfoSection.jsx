import MyName from "./MyName";
import ProfileCardButtons from "./ProfileCardButtons";
import SocialMediaIcons from "./SocialMediaIcons";
import TypeWriter from "./TypeWriter";

function ProfileInfoSection() {
  return (
    <div className="absolute flex flex-col items-center gap-7 before:content-[''] w-full left-0 bottom-0 bg-blurred-bg backdrop-blur-[6px]">
      <MyName />
      <TypeWriter />
      <SocialMediaIcons />
      <ProfileCardButtons />
    </div>
  );
}

export default ProfileInfoSection;
