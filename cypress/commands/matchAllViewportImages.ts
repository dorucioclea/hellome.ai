/// <reference types="cypress" />

export const viewportOptions: Cypress.MatchImageOptions = {
  screenshotConfig: { capture: 'viewport' },
}

const orientations: Cypress.ViewportOrientation[] = ['portrait', 'landscape']
const presets: [Cypress.ViewportPreset, number, number][] = [
  ['ipad-2', 768, 1024],
  ['ipad-mini', 768, 1024],
  ['iphone-3', 320, 480],
  ['iphone-4', 320, 480],
  ['iphone-5', 320, 568],
  ['iphone-6', 375, 667],
  ['iphone-6+', 414, 736],
  ['iphone-7', 375, 667],
  ['iphone-8', 375, 667],
  ['iphone-x', 375, 812],
  ['iphone-xr', 414, 896],
  ['iphone-se2', 375, 667],
  ['macbook-11', 1366, 768],
  ['macbook-13', 1280, 800],
  ['macbook-15', 1440, 900],
  ['macbook-16', 1536, 960],
  ['samsung-note9', 414, 846],
  ['samsung-s10', 360, 760],
]

export const MATCH_IMAGE_TEST_CASE = ({ label, viewport }: ViewportCase) => {
  context(label, () => {
    beforeEach(() => {
      // disable animations
      cy.get('body').invoke(
        'append',
        Cypress.$(`
          <style id="__cypress-animation-disabler">
            *, *:before, *:after {
              transition-property: none !important;
              animation: none !important;
            }
          </style>
        `)
      )
    })

    it('matchImage', viewport, () => {
      cy.document().matchImage(viewportOptions)
    })
  })
}

// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-3 480x320 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-4 480x320 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-5 568x320 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-6 667x375 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-6+ 736x414 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-7 667x375 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-8 667x375 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-se2 667x375 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-x 812x375 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape iphone-xr 896x414 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape samsung-note9 846x414 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) landscape samsung-s10 760x360 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-3 320x480 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-4 320x480 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-5 320x568 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-6 375x667 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-7 375x667 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-8 375x667 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait iphone-se2 375x667 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait macbook-11 1366x768 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait macbook-13 1280x800 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait macbook-15 1440x900 matchImage #0.png
// cypress/e2e/pages/__image_snapshots__/Index  (dark) portrait macbook-16 1536x960 matchImage #0.png

function getDocumentHeight($document: Document) {
  return Math.max(
    Math.max(
      $document.body.scrollHeight,
      $document.documentElement.scrollHeight
    ),
    Math.max(
      $document.body.offsetHeight,
      $document.documentElement.offsetHeight
    ),
    Math.max(
      $document.body.clientHeight,
      $document.documentElement.clientHeight
    )
  )
}

export const SCROLLBAR_TEST_CASE = ({ label, viewport }: ViewportCase) => {
  context(label, () => {
    it('has no scrollbar', viewport, () => {
      cy.document()
        .then(($document) => {
          return $document.documentElement.getBoundingClientRect().toJSON()
        })
        .then((viewportRect) => {
          expect(viewportRect).to.eql({
            x: 0,
            y: 0,
            width: viewport.viewportWidth,
            height: viewport.viewportHeight,
            top: 0,
            right: viewport.viewportWidth,
            bottom: viewport.viewportHeight,
            left: 0,
          })
        })
      // cy.scrollTo('bottom').window().its('scrollY').should('equal', 0)

      cy.document().then(($document) => {
        expect(getDocumentHeight($document)).to.equal(viewport.viewportHeight)
      })
    })
  })
  // })
}

export type ViewportCase = {
  label: string
  preset: Cypress.ViewportPreset
  height: number
  width: number
  orientation: Cypress.ViewportOrientation
  viewport: {
    viewportHeight: number
    viewportWidth: number
  }
}

export function viewportPortraitPresets(): ViewportCase[] {
  return presets.map(([preset, width, height]) => {
    return {
      label: `${preset} ${width}x${height}`,
      preset,
      height,
      width,
      orientation: 'portrait',
      viewport: { viewportHeight: height, viewportWidth: width },
    }
  })
}

export function viewportLandscapePresets(): ViewportCase[] {
  return presets.map(([preset, height, width]) => {
    return {
      label: `${preset} ${width}x${height}`,
      preset,
      height,
      width,
      orientation: 'landscape',
      viewport: { viewportHeight: height, viewportWidth: width },
    }
  })
}

// ***********************************************************
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Runs snapshot diffs against all viewport images
       * @example cy.matchAllViewportImages()
       */
      matchAllViewportImages(): Chainable<void>
    }
  }
}

Cypress.Commands.add('matchAllViewportImages', () => {
  // https://on.cypress.io/viewport

  const PAGE_WAIT_MS = 200

  presets.forEach(([preset, width, height]) => {
    orientations.forEach((orientation) => {
      const label = `${orientation} - (${preset} ${height}x${width})`

      cy.viewport(preset, orientation)
      cy.wait(PAGE_WAIT_MS)
      cy.document().matchImage({
        title: `${Cypress.currentTest.titlePath.join(' ')} (${
          Cypress.browser.displayName
        }) ${label}`,
        // screenshotConfig: { capture: 'viewport' },
      })
    })
  })

  // cy.wait(200)

  // // cy.get('#navbar').should('be.visible')
  // cy.viewport(320, 480)
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // the navbar should have collapse since our screen is smaller
  // cy.get('#navbar').should('not.be.visible')
  // cy.get('.navbar-toggle').should('be.visible').click()
  // cy.get('.nav').find('a').should('be.visible')

  // // lets see what our app looks like on a super large screen
  // cy.viewport(2999, 2999)
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // // cy.viewport() accepts a set of preset sizes
  // // to easily set the screen to a device's width and height

  // // We added a cy.wait() between each viewport change so you can see
  // // the change otherwise it is a little too fast to see :)

  // cy.viewport('macbook-16')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('macbook-15')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('macbook-13')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('macbook-11')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('ipad-2')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('ipad-mini')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-6+')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-6')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-5')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-4')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-3')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // // cy.viewport() accepts an orientation for all presets
  // // the default orientation is 'portrait'
  // cy.viewport('ipad-2', 'portrait')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // cy.viewport('iphone-4', 'landscape')
  // cy.wait(PAGE_WAIT_MS)
  // cy.document().matchImage(options)

  // The viewport will be reset back to the default dimensions
  // in between tests (the  default can be set in cypress.config.{js|ts})
})

export {}
