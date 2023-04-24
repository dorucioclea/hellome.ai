import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function PDFEdit({ pdf }) {
  const [formState, setFormState] = useState(pdf)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/pdfs/${pdf.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('PDF updated!')
        router.push(`/pdfs/${pdf.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit PDF</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={formState.height}
            onChange={(e) =>
              setFormState({ ...formState, height: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            value={formState.width}
            onChange={(e) =>
              setFormState({ ...formState, width: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input
            type="text"
            id="pages"
            value={formState.pages}
            onChange={(e) =>
              setFormState({ ...formState, pages: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={formState.tags}
            onChange={(e) =>
              setFormState({ ...formState, tags: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="createdAt">CreatedAt:</label>
          <input
            type="text"
            id="createdAt"
            value={formState.createdAt}
            onChange={(e) =>
              setFormState({ ...formState, createdAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="fileId">FileId:</label>
          <input
            type="text"
            id="fileId"
            value={formState.fileId}
            onChange={(e) =>
              setFormState({ ...formState, fileId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/pdfs" className="secondary-btn">
            Return to pdfs list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const pdf = await prisma.pdf.findUnique({
    where: { id: params.id },
  })
  return { props: { pdf } }
}
