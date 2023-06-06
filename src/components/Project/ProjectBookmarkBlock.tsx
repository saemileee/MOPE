import React, { useState, useEffect } from 'react';

import { TypeProjectBookmarks } from '../../interfaces/Project.interface';

// 스타일
import styles from './ProjectBookmarkBlock.module.scss';
// 상수
import { PROJECT_TYPE } from '../../constants/project';

function BookmarkLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export default function ProjectBookmarkBlock({
  bookmarksData,
}: {
  bookmarksData: TypeProjectBookmarks | null;
}) {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const [bookmarksCount, setBookmarksCount] = useState<number>(0);

  useEffect(() => {
    if (bookmarksData) {
      setBookmarksCount(bookmarksData.project_bookmark_count);
      setIsBookmark(bookmarksData.is_bookmarked);
    }
  }, [bookmarksData]);

  const handleBookmark = () => {
    try {
      // 북마크 API와 통신합니다.
      /*
      let response : AxiosResponse<T>; 
      if (isBookmark) response = await Fetcher.postBookmark();
      else response = await Fecher.deleteBookmark();

      switch(response.status) {
        case 200:
          setIsBookmark(false);
          break;
        case 201:
          setIsBookmark(true);
          break;
        default:
          throw new Error('예기치 않은 서버 응답');
      }
      */

      // 북마크 API 통신 반환값에 따라 상태를 변경합니다.
      // 해당코드는 UI구상을 위한 임시코드임
      setIsBookmark((prev) => !prev);
      isBookmark ? setBookmarksCount((prev) => prev - 1) : setBookmarksCount((prev) => prev + 1);
    } catch (error) {
      alert('북마크에 실패했습니다.');
    }
  };

  if (bookmarksData) {
    return (
      <div className={styles.container}>
        <button className={styles.bookmarkButton} onClick={handleBookmark}>
          {isBookmark ? (
            <>
              <BookmarkLogo className={styles.bookmarkYes} />
              <p className={styles.bookmarkName}>북마크 중</p>
            </>
          ) : (
            <>
              <BookmarkLogo className={styles.bookmarkNot} />
              <p className={styles.bookmarkName}>북마크</p>
            </>
          )}
        </button>
        <p className={styles.bookmarkText}>
          {bookmarksCount > 0
            ? `${bookmarksCount}명이 북마크한 ${PROJECT_TYPE[bookmarksData.project_type]}`
            : ''}
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}