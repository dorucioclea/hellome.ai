import { BLANK_PDF, Template, generate as pdfGenerator } from '@pdfme/generator'
import { writeFileSync } from 'fs'
import path from 'path'

import { Page } from './pdf-types'

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      title: {
        type: 'text',
        position: { x: 100, y: 300 },
        width: 100,
        height: 50,
      },
      subTitle: {
        type: 'text',
        position: { x: 100, y: 450 },
        width: 100,
        height: 50,
      },
      author: {
        type: 'text',
        position: { x: 100, y: 550 },
        width: 100,
        height: 50,
      },
      publicationDate: {
        type: 'text',
        position: { x: 100, y: 850 },
        width: 100,
        height: 50,
      },
      text: {
        type: 'text',
        position: { x: 50, y: 50 },
        width: 500,
        height: 1000,
      },
      pageNumber: {
        type: 'text',
        position: { x: 100, y: 1250 },
        width: 40,
        height: 40,
      },
      closeMessage: {
        type: 'text',
        position: { x: 100, y: 300 },
        width: 500,
        height: 700,
      },
    },
  ],
}

// 1. Read/Parse the content of the JSON object
// const filePath = './sherlock.json';
// const jsonData = readFileSync(filePath, 'utf-8');

// 2. Iterate over every object in the "data" to create the
// schemas array (use narrowing for page type layout)
let inputs: Page[] = [
  {
    title: 'A Study In Scarlet',
    author: 'Sir Arthur Conan Doyle',
    publicationDate: 'First published in 1887',
  },
  {
    pageNumber: '1',
    text: "In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the army. Having completed my studies there, I was duly attached to the Fifth Northumberland Fusiliers as Assistant Surgeon. The regiment was stationed in India at the time, and before I could join it, the second Afghan war had broken out. On landing at Bombay, I learned that my corps had advanced through the passes, and was already deep in the enemy's country. I followed, however, with many other officers who were in the same situation as myself, and succeeded in reaching Candahar in safety, where I found my regiment, and at once entered upon my new duties.\nThe campaign brought honours and promotion to many, but for me it had nothing but misfortune and disaster. I was removed from my brigade and attached to the Berkshires, with whom I served at the fatal battle of Maiwand. There I was struck on the shoulder by a Jezail bullet, which shattered the bone and grazed the subclavian artery. I should have fallen into the hands of the murderous Ghazis had it not been for the devotion and courage shown by Murray, my orderly, who threw me across a pack-horse, and succeeded in bringing me safely to the British lines.",
  },
  {
    pageNumber: '2',
    text: 'Worn with pain, and weak from the prolonged hardships which I had undergone, I was removed, with a great train of wounded sufferers, to the base hospital at Peshawar. Here I rallied, and had already improved so far as to be able to walk about the wards, and even to bask a little upon the verandah, when I was struck down by enteric fever, that curse of our Indian possessions. For months my life was despaired of, and when at last I came to myself and became convalescent, I was so weak and emaciated that a medical board determined that not a day should be lost in sending me back to England. I was dispatched, accordingly, in the troopship Orontes, and landed a month later on Portsmouth jetty, with my health irretrievably ruined, but with permission from a paternal government to spend the next nine months in attempting to improve it.\nI had neither kith nor kin in England, and was therefore as free as air—or as free as an income of eleven shillings and sixpence a day will permit a man to be. Under such circumstances, I naturally gravitated to London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained. There I stayed for some time at a private hotel in the Strand, leading a comfortless, meaningless existence, and spending such money as I had, considerably more freely than I ought. So alarming did the state of my finances become, that I soon realized that I must either leave the metropolis and rusticate somewhere in the country, or that I must make a complete alteration in my style of living. Choosing the latter alternative, I began by making up my mind to leave the hotel, and to take up my quarters in some less pretentious and less expensive domicile.',
  },
  {
    closeMessage: 'Thanks Sherlock!',
  },
]

// const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }]

type GenerateProps = {
  name: string
}

export const generate = async ({ name }: GenerateProps) => {
  return pdfGenerator({ template, inputs }).then((pdf) => {
    console.log(pdf)

    // Browser
    // const blob = new Blob([pdf.buffer], { type: 'application/pdf' })
    // window.open(URL.createObjectURL(blob))

    // Node.js
    const filename = path.join(__dirname, `../pdf/out/test.pdf`)
    writeFileSync(filename, pdf)

    return {
      ok: true,
      filename,
    }
  })
}
