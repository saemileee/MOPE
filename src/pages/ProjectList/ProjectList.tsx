import { RefObject, useEffect, useRef } from 'react';
import useProjectList from '../../hooks/useProjectList';
import { useMediaQuery } from 'react-responsive';
import styles from './ProjectListMain.module.scss';
import Category from '../../components/ProjectList/Category';
import ProjectPostButton from '../../components/common/ProjectPostButton';
import ProjectSearch from '../../components/ProjectList/ProjectSearch';
import RecruitingProjectFilter from '../../components/ProjectList/RecruitingProjectFilter';
import ProjectList from '../../components/ProjectList/ProjectList';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function ProjectListPage() {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  const {
    projectListData,
    projectFilterState,
    handleChangeCategory,
    handleChangeSearchValue,
    handleChangeRecruitingState,
    handleIncreasePageCount,
  } = useProjectList();
  useEffect(() => {
    console.log(projectListData);
  }, [projectListData]);

  const getNextPageRef: RefObject<HTMLElement | HTMLLIElement> = useInfiniteScroll(() => {
    if (projectListData.pageSize > projectFilterState.pageCount) {
      handleIncreasePageCount();
    }
  });

  return (
    <>
      <div className={!isMobile ? `${styles.container}` : `${styles.mobileContainer}`}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContentContainer}>
            <Category
              selectedCategory={projectFilterState.category}
              handleClick={handleChangeCategory}
            />
            {!isMobile && <ProjectPostButton />}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.searchContainer}>
            <ProjectSearch handleChange={handleChangeSearchValue} />
            <RecruitingProjectFilter onChange={handleChangeRecruitingState} />
          </div>
          <ProjectList
            projectList={projectListData.posts}
            isLoading={false}
            moreData={projectListData.moreData}
            innerRef={getNextPageRef}
          />
        </div>
        {isMobile && <ProjectPostButton />}
      </div>
    </>
  );
}

export default ProjectListPage;