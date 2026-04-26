declare module 'nuxt/schema' {
  interface AppConfigInput {
    theme: {
      [key in NTheme.ColorType]: string
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
