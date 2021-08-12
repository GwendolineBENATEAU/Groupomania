import React from 'react'
import { useState } from 'react'
import MessageAPI from '../fetch/MessageAPI'

function UploadFile() {
      const [files, setFiles] = useState({
            image: '',
      })

      const uploadImage = async (e) => {
            e.preventDefault()
            //creation d'une instance de FormData sinon cela ne fonctionne pas car format json impossible
            const formData = new FormData()

            //ajout files[0] au formData appelé files
            formData.append('files', files[0])

            //appel sur l'API pour la route upload
            try {
                  await MessageAPI.upload(formData)
            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <form onSubmit={uploadImage}>
                  <input
                        id="image"
                        name="image"
                        type="file"
                        label="Image"
                        accept="image/*"
                        onChange={(e) => setFiles(e.target.files)}
                        style={{ margin: 50 }}
                  />
                  <input type="submit" value="Submit" />
            </form>
      )
}

export default UploadFile
