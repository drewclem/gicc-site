type ValidationRule = {
  required?: boolean | string;
  email?: boolean | string;
  minLength?: { value: number; message?: string };
  maxLength?: { value: number; message?: string };
  pattern?: { value: RegExp; message?: string };
  custom?: (value: string) => string | true;
};

type ValidationRules<T extends Record<string, string>> = {
  [K in keyof T]?: ValidationRule;
};

type FormErrors<T> = Partial<Record<keyof T, string | undefined>>;
type FormTouched<T> = Partial<Record<keyof T, boolean>>;

export function useFormValidation<T extends Record<string, string>>(
  form: T,
  rules: ValidationRules<T>,
) {
  const errors: FormErrors<T> = reactive({});
  const touched: FormTouched<T> = reactive({});

  function validateField(field: keyof T): boolean {
    if (!form) return true;

    const value = form[field] ?? "";
    const fieldRules = rules[field];

    if (!fieldRules) {
      delete errors[field];
      return true;
    }

    // Required
    if (fieldRules.required && !value?.trim()) {
      errors[field] =
        typeof fieldRules.required === "string"
          ? fieldRules.required
          : "This field is required";
      return false;
    }

    // Email
    if (fieldRules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field] =
          typeof fieldRules.email === "string"
            ? fieldRules.email
            : "Please enter a valid email";
        return false;
      }
    }

    // Min length
    if (fieldRules.minLength && value && value.length < fieldRules.minLength.value) {
      errors[field] =
        fieldRules.minLength.message ||
        `Must be at least ${fieldRules.minLength.value} characters`;
      return false;
    }

    // Max length
    if (fieldRules.maxLength && value && value.length > fieldRules.maxLength.value) {
      errors[field] =
        fieldRules.maxLength.message ||
        `Must be no more than ${fieldRules.maxLength.value} characters`;
      return false;
    }

    // Pattern
    if (fieldRules.pattern && value && !fieldRules.pattern.value.test(value)) {
      errors[field] = fieldRules.pattern.message || "Invalid format";
      return false;
    }

    // Custom
    if (fieldRules.custom && value) {
      const result = fieldRules.custom(value);
      if (result !== true) {
        errors[field] = result;
        return false;
      }
    }

    delete errors[field];
    return true;
  }

  function validate(): boolean {
    let isValid = true;
    for (const field of Object.keys(rules) as Array<keyof T>) {
      touched[field] = true;
      if (!validateField(field)) {
        isValid = false;
      }
    }
    return isValid;
  }

  function reset(): void {
    for (const field of Object.keys(rules) as Array<keyof T>) {
      delete errors[field];
      delete touched[field];
    }
  }

  function touch(field: keyof T): void {
    touched[field] = true;
    validateField(field);
  }

  const isValid = computed(() => Object.keys(errors).length === 0);

  return {
    errors,
    touched,
    validate,
    validateField,
    reset,
    touch,
    isValid,
  };
}
