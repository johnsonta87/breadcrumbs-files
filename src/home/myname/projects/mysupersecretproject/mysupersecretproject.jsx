import React from 'react'
import { getSecretFiles } from '../../../../utils';

export default function mysupersecretproject() {
  const files = getSecretFiles();

  return (
    <div>
      <h1>THIS IS mysupersecretproject</h1>

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
