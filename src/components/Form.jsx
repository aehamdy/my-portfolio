function Form() {
  return (
    <form
      action=""
      className="font-poppins flex flex-col gap-7 font-medium text-sm text-medium-gray dark:text-white-85"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
        <div className="sm:w-1/2 sm:pe-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full h-12 focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
            required
          />
        </div>
        <div className="sm:w-1/2 sm:ps-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="w-full h-12 focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
            required
          />
        </div>
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        className="w-full h-28 resize-none focus:text-accent bg-transparent border-b border-b-light-gray-dd dark:border-b-gray-666 focus:border-b-accent placeholder-light-gray dark:placeholder-gray-666 focus:placeholder-dark-gray focus:dark:placeholder-white-90 outline-none duration-200"
        required
      ></textarea>
    </form>
  );
}

export default Form;
