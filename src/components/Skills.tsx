import { databases, frameworks, languages, misc, tools, UI } from "../Content";
import classname from "classnames";

export const BulletPoint = ({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className?: string;
}) => {
  return (
    <h2 className={classname("text-base", className)}>
      {title}
      <ul className="flex items-start text-neutral-900">
        <li className="flex text-xs">{content}</li>
      </ul>
    </h2>
  );
};

export const Skills = () => {
  return (
    <section className="flex flex-col w-48 h-full pl-10 text-amber-700 text-xs">
      <b className="text-lg">Skills</b>
      <div className="flex flex-col justify-between h-full">
        <BulletPoint
          title="Languages"
          content={languages.join(", ")}
          className="pt-1"
        />
        <BulletPoint title="Databases" content={databases.join(", ")} />
        <BulletPoint title="Frameworks" content={frameworks.join(", ")} />
        <BulletPoint title="UI" content={UI.join(", ")} />
        <BulletPoint title="Tools" content={tools.join(", ")} />
        <BulletPoint title="General" content={misc.join(", ")} />
      </div>
    </section>
  );
};
