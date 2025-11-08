/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
