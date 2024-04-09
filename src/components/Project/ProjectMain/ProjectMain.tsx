import { Button } from "../../Button/Button";
import "./ProjectMain.scss";

interface projectMainProps {
  currentPage: number;
  totalPage: number;
  project: string[];
  handleChangePage: (num: number) => void
}

export const ProjectMain: React.FC<projectMainProps> = ({
  project,
  currentPage,
  totalPage,
  handleChangePage,
}) => {
  return (
    <div className="projectMain">
      <div className="projectMain__title">
        <p className="projectMain__title-main">
          project <br />
          <span className="projectMain__title-text">{project[currentPage - 1]}</span>
        </p>
      </div>
      <div className="projectMain__controlls">
        <div onClick={() => handleChangePage(-1)}>
          <Button arrowSide="left" containerClass="projectMain__controlls-button"/>
        </div>
        <div onClick={() => handleChangePage(1)} className="line">
          <Button arrowSide="right" containerClass="projectMain__controlls-button"/>
        </div>
      </div>
      <div className="projectMain__pages">
        <span className="projectMain__pages-current">
          {currentPage < 10 ? `0${currentPage}` : currentPage}
        </span>
          <span className="projectMain__pages-divide"></span>
          <span className="projectMain__pages-total">
            {totalPage < 10 ? `0${totalPage}` : totalPage}
            </span>
      </div>
    </div>
  );
};
