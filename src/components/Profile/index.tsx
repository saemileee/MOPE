import { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import { TypeUserProfile } from '../../interfaces/User.interface';
import { getUserProfile } from '../../apis/Fetcher';

function Profile() {
  const [user, setUser] = useState<TypeUserProfile>();

  const getUserData = async () => {
    try {
      const userList = await getUserProfile();
      setUser(userList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={user?.user_img} alt={user?.user_name}></img>
        <button className={styles.updateButton}>편집</button>
      </div>
      <div className={styles.introWrapper}>
        <div className={styles.name}>{user?.user_name}</div>
        <div className={styles.intro}>{user?.user_introduction}</div>
        <div className={styles.career}>{user?.user_career_goal}</div>
        <div className={styles.stacks}>
          {user?.user_stacks.stackList.map((stack, index) => {
            return (
              <div className={styles.stack} key={`${stack}-${index}`}>
                {stack}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
