/* eslint-disable react/prop-types */
function EmailNotification({ isEmailSuccess }) {
  return (
    <>
      <div
        className={`w-fit h-[34px] mx-auto py-1.5 px-3 ${
          isEmailSuccess === true && isEmailSuccess !== null
            ? "border border-accent"
            : isEmailSuccess !== null &&
              isEmailSuccess === false &&
              " border border-red-500"
        } rounded-md`}
      >
        {isEmailSuccess !== null && (
          <p className="mx-auto w-fit text-light-gray dark:text-white-55">
            {isEmailSuccess
              ? "Thank you for you message. It has been sent."
              : "Something went wrong!"}
          </p>
        )}
      </div>
    </>
  );
}

export default EmailNotification;
