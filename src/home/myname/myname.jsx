import React from 'react'
import { getFiles } from '../../utils';

export default function myName() {
  const files = getFiles();

  if (!files || !files.length) {
    return <p>No files.</p>
  }

  return (
    <div>
      <h1>THIS IS MYNAME</h1>

      <>
        {
          files.map((file, key) => {
            return (
              <p key={key}>
                <a href={file}>{file}</a>
              </p>
            )
          })
        }
      </>
    </div>
  )
}
