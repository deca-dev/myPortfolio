const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/davidcastroanaya/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/deca-dev"
        target="_blank"
        rel="noreferrer"
      >
        <i className="text-[33px] fa-brands fa-github"></i>
      </a>

    </div>
  );
};

export default SocialMediaIcons;
