<template>
  <UForm
    class="flex flex-col justify-between gap-3"
    ref="form"
    :schema="schema"
    :state="formState"
    @submit.prevent="submit"
  >
    <UFormGroup name="name" label="Name">
      <UInput v-model="formState.name" />
    </UFormGroup>
    <UFormGroup name="email" label="Email">
      <UInput v-model="formState.email" />
    </UFormGroup>
    <UFormGroup name="city" label="City">
      <UInput v-model="formState.city" />
    </UFormGroup>
    <UFormGroup name="street" label="Street">
      <UInput v-model="formState.street" />
    </UFormGroup>
    <UFormGroup name="comment" label="Comment to order">
      <UTextarea v-model="formState.comment" />
    </UFormGroup>
    <UButton
      color="emerald"
      variant="soft"
      size="xl"
      type="submit"
      class="mt-8 w-full justify-center"
    >
      To order
    </UButton>
  </UForm>
</template>
<script setup lang="ts">
import { string, object } from "yup";
const formState = ref({
  name: undefined,
  email: undefined,
  city: undefined,
  street: undefined,
  comment: undefined,
});
const form = ref();

const schema = object({
  name: string().required("Name is required field"),
  email: string().email("Invalid email").required("Email is required field"),
  city: string().required("City is required field"),
  street: string().required("Street is required field"),
  comment: string(),
});

async function submit() {
  await form.value!.validate();
}
</script>
