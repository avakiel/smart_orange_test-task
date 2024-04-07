import { useState } from "react";
import "./Project.scss";
import { ProjectGallery } from "./ProjectGallery/ProjectGallery";
import { ProjectMain } from "./ProjectMain/ProjectMain";
import img1 from '../../img/pr_1.png';
import img2 from '../../img/pr_2.png';
import img3 from '../../img/pr_3.jpg';

const content = ['home', 'office', 'apartment']
const img = [img1, img2, img3];

export const Project = () => {
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState(img);

  const handleChangePage = (num: number) => {
    if (page >= 1 &&  page < gallery.length && num > 0) {
      setPage(curr => curr + 1)
    } else if (page === gallery.length && num > 0) {
      setPage(1)
    } else if (page > 1 && num < 0) {
      setPage(curr => curr - 1)
    } else if (page === 1 && num < 0) {
      setPage(content.length)
    }
  };

  return (
    <div className="project">
      <div className="project_main">
        <ProjectMain
          project={content}
          currentPage={page}
          totalPage={content.length}
          handleChangePage={handleChangePage}
        />
      </div>
      <div className="project_gallery">
        <ProjectGallery gallery={img} currentPage={page} />
      </div>
    </div>
  );
};
