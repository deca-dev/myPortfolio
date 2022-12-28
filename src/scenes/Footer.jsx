import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-dark-grey pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-amber-600">
            DAVID CASTRO
          </p>
          <p className="font-playfair text-md text-amber-600">
            ©2022 CASTRO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
