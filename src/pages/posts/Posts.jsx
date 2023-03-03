import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPostsByUserIdAction } from "../../redux/slices/postSlice";
import styles from "./posts.module.css";

const Posts = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, isLoading, isDirty } = useSelector((s) => s.postReducer);

  const notDirtyButEmpty = !isDirty && !posts.length;
  const isEmpty = !posts.length && isDirty;

  const handleGoBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getPostsByUserIdAction(userId));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Posts of user with id - {userId}</h2>
        {notDirtyButEmpty || isLoading ? (
          <>Loading...</>
        ) : isEmpty ? (
          <>No posts found</>
        ) : (
          posts.map((p, i) => {
            return (
              <div className={styles.postContainer} key={i}>
                <p>{p.title}</p>
                <p>{p.body}</p>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.right}>
        <button onClick={handleGoBackClick}>Go back</button>
      </div>
    </div>
  );
};

export default Posts;
