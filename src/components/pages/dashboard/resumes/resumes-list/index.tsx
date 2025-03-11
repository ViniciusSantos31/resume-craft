import { AddResumeButton } from "../add-resume-button";
import { NewResumeDialog } from "../new-resume-dialog";
import { ResumeCard } from "../resume-card";

export const ResumesList = () => {
  return (
    <section className="lg:gpa-5 grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  );
};
