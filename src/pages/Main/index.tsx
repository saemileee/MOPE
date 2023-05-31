import { useEffect, useState } from 'react';
import { getProjects } from '../../apis/Fetcher';
import { TypeProjectList } from '../../interfaces/Project.interface';
import Category from '../../components/ProjectList/Category';
import ProjectList from '../../components/ProjectList/ProjectList';
import ProjectPostButton from '../../components/ProjectList/ProjectPostButton';
import ProjectSearch from '../../components/ProjectList/ProjectSearch';
import styles from './Main.module.scss';

function Main() {
  const [projectList, setProjectList] = useState<TypeProjectList[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const projectList = await getProjects();
        setProjectList(projectList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <Category />
          <ProjectPostButton />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ProjectSearch />
        <ProjectList projectList={projectList} />
      </div>
    </div>
  );
}

export default Main;
