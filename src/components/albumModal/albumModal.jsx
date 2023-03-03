import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsByUserIdAction } from "../../redux/slices/albumSlice";
import Modal from "../modal/modal";
import styles from "./albumModal.module.css";

const AlbumModal = ({ isOpen, userId, handleCloseBtnClick }) => {
  const dispatch = useDispatch();

  const { albums, isLoading, isDirty } = useSelector((s) => s.albumReducer);

  const notDirtyButEmpty = !isDirty && !albums.length;
  const isEmpty = !albums.length && isDirty;

  useEffect(() => {
    if (userId == null) return;
    dispatch(getAlbumsByUserIdAction(userId));
    // eslint-disable-next-line
  }, [userId]);

  return (
    isOpen && (
      <Modal handleCloseBtnClick={handleCloseBtnClick} title="Albums">
        {notDirtyButEmpty || isLoading ? (
          <>Loading...</>
        ) : isEmpty ? (
          <>No albums found</>
        ) : (
          albums.map((a, i) => {
            return (
              <div className={styles.albumContainer} key={i}>
                {a.title}
              </div>
            );
          })
        )}
      </Modal>
    )
  );
};

export default AlbumModal;
