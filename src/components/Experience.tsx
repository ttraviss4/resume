import { picThrive, grayWolf } from "../Content";

type JobType = {
  title: string;
  company: string;
  start: string;
  end: string;
  items: {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    misc?: string[];
  };
};

export const List = ({ contentList }: { contentList?: string[] }) => {
  return (
    <ul className="list-disc pl-6 mt-2">
      {contentList?.map((content, index) => (
        <li key={index} className="mb-2">
          {content}
        </li>
      ))}
    </ul>
  );
};

export const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="flex flex-col text-xs">
      <div className="flex justify-between pt-2">
        <b className="text-xs">
          {job.title}, <i>{job.company}</i>
        </b>
        <div className="text-xs text-gray-500">
          {job.start} - {job.end}
        </div>
      </div>
      {job.items.misc ? (
        <List contentList={job.items.misc} />
      ) : (
        <div className="pt-2">
          <b className="pl-2">Frontend</b>
          <List contentList={job.items.frontend} />
          <b className="mt-2 pl-2">Backend</b>
          <List contentList={job.items.backend} />
          {job.items.data && (
            <b className="mt-2 pl-2">Data</b>
          )}
          <List contentList={job.items.data} />
        </div>
      )}
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="flex flex-col w-full h-full mt-6">
      <b className="text-amber-700 text-lg">Experience</b>
      <Job job={picThrive} />
      <Job job={grayWolf} />
      {/* <Job job={rainforest} /> */}
    </section>
  );
};
