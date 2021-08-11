import React from 'react'

function UploadFile() {
      return (
            <div>
                  <input
                        id="image"
                        name="image"
                        type="file"
                        label="Image"
                        accept="image/*"
                        style={{ marginTop: 30 }}
                  />
            </div>
      )
}

export default UploadFile
