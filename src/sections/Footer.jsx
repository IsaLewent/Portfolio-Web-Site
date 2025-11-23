const Footer = () => {
  const mySocials = [
    {
      href: "https://www.instagram.com/isalewent/",
      icon: "/assets/socials/instagram.svg",
      name: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: "/assets/socials/linkedIn.svg",
      name: "LinkedIn",
    },
    {
      href: "https://whatsapp.com",
      icon: "/assets/socials/whatsApp.svg",
      name: "whatsapp",
    },
  ];

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3  mb-[4rem] text-sm text-neutral-400 c-space h-[6rem]">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex items-center justify-center gap-5 mt-3 w-full">
        <p>Terms & Conditions</p>
        <p>II</p>
        <p>Privacy Policy</p>
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              target="_blank"
              href={social.href}
              key={index}
              className="gap-3 hover-animation hover:scale-120"
            >
              <img src={social.icon} className="w-5 h-5" alt={social.name} />
            </a>
          ))}
          <p>&copy; Isa . All rights reserved</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mt-3" />
    </section>
  );
};

export default Footer;
