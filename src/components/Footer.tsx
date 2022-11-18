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
    <footer className="border-t border-yellow-700 h-36 grid grid-cols-2 gap-4 mx-10 py-6">
      <span className="text-xs flex items-center ml-10">
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
      <span className="text-xs flex items-center ml-10">
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
    </footer>
  );
};