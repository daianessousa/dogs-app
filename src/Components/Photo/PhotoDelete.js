import React from 'react'
import { PHOTO_DELETE } from '../../api';
import UseFetch from '../Hooks/UseFetch';
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {

  const { loading, request } = UseFetch();

  async function handleClick() {
    const confirm = window.confirm('Deseja realmente deletar essa linda imagem?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }
  return (
    <>
      { loading ? (<button className={styles.delete} disabled> Deletar </button>) : <button onClick={handleClick} className={styles.delete}> Deletar </button>
      }
    </>
  )
}

export default PhotoDelete
