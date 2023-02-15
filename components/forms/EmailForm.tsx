import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  TextInputProps,
} from 'flowbite-react'
import styles from './forms.module.css'
import React, { useState, MouseEvent } from 'react'
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton'

// See: https://flowbite.com/docs/forms/input-field/

// const theme: TextInputProps['theme'] = {
//   field: {
//     input: {
//       // colors: {
//       //   'background-color': "white"
//       // }
//       base: styles.formInput,
//     },
//   },
// }

export interface EmailFormProps {
  // onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function EmailForm({}: // onSubmit
EmailFormProps) {
  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    console.log('submit')
  }

  const icon = (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  )

  return (
    <form
      className={styles.formRoot}
      action="/"
      method="post"
      autoComplete="on"
    >
      <Label className={styles.formLabel} htmlFor="email" value="Email" />

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>

        <TextInput
          className={styles.formInput}
          // theme={theme}
          id="email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          required={true}
        />
      </div>

      {/* <div className="w-full inline"> */}
      <Button
        color="light"
        className={styles.formSubmit}
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </Button>
      {/* </div> */}
    </form>
  )
}

{
  /* First name & Last name*/
}
{
  /* <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <div className="mb-2 block">
              <Label
                className={styles.formLabel}
                htmlFor="first-name"
                value="First name"
              />
            </div>
            <TextInput
              // className={styles.formInput}
              theme={theme}
              id="first-name"
              placeholder="First name"
              autoComplete="given-name"
              required={true}
              autoFocus={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                className={styles.formLabel}
                htmlFor="last-name"
                value="Last name"
              />
            </div>
            <TextInput
              // className={styles.formInput}
              theme={theme}
              id="last-name"
              placeholder="Last name"
              autoComplete="family-name"
              required={true}
            />
          </div>
        </div>
      </div> */
}