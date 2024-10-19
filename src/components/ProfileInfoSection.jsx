import MyName from "./MyName";
import ProfileCardButtons from "./ProfileCardButtons";
import SocialMediaIcons from "./SocialMediaIcons";
import TypeWriter from "./TypeWriter";

function ProfileInfoSection() {
  return (
    <div className="absolute flex flex-col items-center gap-7 before:content-[''] w-full left-0 bottom-0 bg-blurred-bg backdrop-blur-[6px]">
      <div className="absolute top-0 translate-y-[-50%]">
        <MyName textStyle="text-4xl font-bold text-white-90 dark:text-white-90" />
      </div>
      <div className="h-7 ">
        <TypeWriter textSize="xl" />
      </div>
      <SocialMediaIcons />
      <ProfileCardButtons />
    </div>
  );
}

export default ProfileInfoSection;
