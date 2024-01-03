export interface FormField {
  placeholder: string;
  type: string;
  options?: string[];
}

// Define an interface for the helpForms with an index signature
export interface HelpForms {
  [key: string]: FormField[];
}
