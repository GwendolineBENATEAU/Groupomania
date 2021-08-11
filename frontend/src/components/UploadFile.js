import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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

            axios.post('http://localhost:1337/upload', formData)
                  .then((response) => {
                        const imageId = response.data[0].id
                        console.log(imageId)
                        console.log(JSON.stringify(response.data))

                        /* axios.post('http://localhost:1337/message', {
                              image: imageId,
                        })
                              .then((res) => {
                                    console.log(res)
                                    console.log(res.data)
                              })
                              .catch((error) => {
                                    console.log(error)
                              })*/
                  })
                  .catch((error) => {
                        console.log(error)
                  })
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
