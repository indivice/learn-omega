import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}> <img style={{ aspectRatio: '1/1', height: '35px' }} src='/omega-logo.svg'></img> OmegaONE Docs</span>,
  project: {
    link: 'https://github.com/indivice/omega',
  },
  footer: {
    text: 'OmegaONE Documentation & Knowledge Base | (C) 2024 by Mayukh Chakraborty',
  },
  primaryHue: 292,
  primarySaturation: 100,
  feedback: {
    content: null
  },
  editLink: {
    component: null
  }
}

export default config
