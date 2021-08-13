import React from 'react'
import { useState } from 'react'
import MessageAPI from '../fetch/MessageAPI'
import { Card } from '@material-ui/core'

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
            <Card
                  style={{
                        marginBottom: 10,
                        padding: 20,
                        backgroundColor: '#ebe9e9',
                        borderColor: '#bfbdbd',
                        borderStyle: 'solid',
                        borderWidth: 1.5,
                        boxShadow: 'none',
                  }}
            >
                  <form
                        onSubmit={uploadImage}
                        required
                        label="Ajouter une image"
                  >
                        <input
                              required
                              id="image"
                              name="image"
                              type="file"
                              label="Image"
                              accept="image/*"
                              onChange={(e) => setFiles(e.target.files)}
                        />
                        <input
                              required
                              type="submit"
                              value="Lancer le télécharger"
                              label="Image"
                        />
                  </form>
            </Card>
      )
}

export default UploadFile
