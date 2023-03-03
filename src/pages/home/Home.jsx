import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsersAction } from "../../redux/slices/userSlice";
import styles from "./home.module.css";
import { POSTS } from "../../common/constants";
import AlbumModal from "../../components/albumModal/albumModal";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading, isDirty } = useSelector((s) => s.userReducer);

  const notDirtyButEmpty = !isDirty && !users.length;
  const isEmpty = !users.length && isDirty;

  const initialAlbumModalState = { isOpen: false, userId: null };
  const [albumModalState, setAlbumModalState] = useState(
    initialAlbumModalState
  );

  const handleAlbumsClick = (userId) => {
    setAlbumModalState({ isOpen: true, userId });
  };

  const handlePostsClick = (userId) => {
    navigate(`${POSTS}/${userId}`);
  };

  const handleAlbumModalClose = () => {
    setAlbumModalState(initialAlbumModalState);
  };

  useEffect(() => {
    dispatch(getUsersAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AlbumModal
        isOpen={albumModalState.isOpen}
        userId={albumModalState.userId}
        handleCloseBtnClick={handleAlbumModalClose}
      />
      {notDirtyButEmpty || isLoading ? (
        <>Loading...</>
      ) : isEmpty ? (
        <>No users found</>
      ) : (
        users.map((u, i) => {
          return (
            <div className={styles.userCard} key={i}>
              <span>{u.name}</span>
              <div className={styles.btnGroup}>
                <button onClick={() => handlePostsClick(u.id)}>Posts</button>
                <button onClick={() => handleAlbumsClick(u.id)}>Albums</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
