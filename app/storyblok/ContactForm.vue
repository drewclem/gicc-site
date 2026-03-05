<script setup lang="ts">
defineProps<{
  blok: {
    title?: string;
    description?: string;
    formSpreeId: string;
    successMessage?: string;
    showTitle?: boolean;
  };
}>();

const form = reactive({
  name: "",
  email: "",
  reason: "",
  message: "",
});
const status = ref<"idle" | "submitting" | "success" | "error">("idle");

const { errors, validate, touch, reset } = useFormValidation(form, {
  name: {
    required: "Name is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" },
  },
  email: {
    required: "Email is required",
    email: "Please enter a valid email address",
  },
  reason: {
    required: "Please select a reason for contact",
  },
  message: {
    required: "Message is required",
    minLength: { value: 10, message: "Message must be at least 10 characters" },
    maxLength: {
      value: 1000,
      message: "Message must be less than 1000 characters",
    },
  },
});

const contactReasons = [
  { value: "general", label: "General Inquiry" },
  { value: "events", label: "Events & Tournaments" },
  { value: "lessons", label: "Private Lessons" },
  { value: "youth", label: "Youth Programs" },
  { value: "meetups", label: "Meetups" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "volunteering", label: "Volunteering" },
  { value: "other", label: "Other" },
];

const { elementRef, isVisible } = useScrollAnimation();

async function handleSubmit(formspreeId: string) {
  if (!validate()) return;

  status.value = "submitting";

  try {
    await $fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    });
    status.value = "success";
    form.name = "";
    form.email = "";
    form.reason = "";
    form.message = "";
    reset();
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <section
    ref="elementRef"
    v-editable="blok"
    class="pb-12 scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <UiStack space="medium">
      <UiStack space="small" v-if="blok.showTitle">
        <h2 v-if="blok.title" class="text-3xl font-bold">{{ blok.title }}</h2>
        <p v-if="blok.description" class="text-gray-600">
          {{ blok.description }}
        </p>
      </UiStack>

      <UiStack
        v-if="status !== 'success'"
        as="form"
        @submit.prevent="handleSubmit(blok.formSpreeId)"
      >
        <UiInput
          v-model="form.name"
          label="Name"
          type="text"
          :error="errors.name"
          @blur="touch('name')"
        />
        <UiInput
          v-model="form.email"
          label="Email"
          type="email"
          :error="errors.email"
          @blur="touch('email')"
        />
        <UiSelect
          v-model="form.reason"
          label="Reason for Contact"
          placeholder="Select a reason"
          :options="contactReasons"
          :error="errors.reason"
          @blur="touch('reason')"
        />
        <UiTextarea
          v-model="form.message"
          label="Message"
          :max-length="1000"
          :error="errors.message"
          @blur="touch('message')"
        />

        <div>
          <UiButton
            variant="primary"
            type="submit"
            :disabled="status === 'submitting'"
          >
            {{ status === "submitting" ? "Sending..." : "Send Message" }}
          </UiButton>
        </div>

        <p v-if="status === 'error'" class="text-red-600">
          Something went wrong. Please try again.
        </p>
      </UiStack>

      <div v-else class="mt-8 rounded-md bg-green-50 p-6 text-center">
        <p class="text-green-800">
          {{ blok.successMessage || "Thank you! Your message has been sent." }}
        </p>
      </div>
    </UiStack>
  </section>
</template>
