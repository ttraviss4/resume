import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { GrMail, GrReactjs } from "react-icons/gr";
import { contactInfo } from "../Content";

export const ContactLink = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className="hover:underline"
  >
    {title}
  </a>
);

export const Footer = () => {
  return (
    <footer className="border-t border-yellow-700 flex justify-center mx-10 h-28 md:h-28">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-10 py-2 sm:py-6">
        <span className="text-xs flex items-center">
          <BsFillTelephoneFill className="h-3 w-3 mr-2" />
          {contactInfo.phone}
        </span>
        <span className="text-xs flex items-center">
          <BsLinkedin className="h-3 w-3 mr-2" />
          <ContactLink
            href={contactInfo.linkedIn}
            title="View LinkedIn Profile"
          />
        </span>
        <span className="text-xs flex items-center">
          <GrMail className="h-3 w-3 mr-2" />
          <ContactLink
            href={`mailto:${contactInfo.email}`}
            title={contactInfo.email}
          />
        </span>
        <span className="text-xs flex items-center">
          <GrReactjs className="h-3 w-3 mr-2" />
          <ContactLink href={contactInfo.github} title="View Resume Code" />
        </span>
        {/* TODO: download as PDF */}
        {/* <span className="text-xs flex items-center">
        <IoMdDownload className="h-3 w-3 mr-2" />
        Download
      </span> */}
      </div>
    </footer>
  );
};
