<template>
  <FormulateForm @submit="submit" class="auth:form auth:msisdn-form">
    <FormulateInput
      class="form:group"
      label="Digite o Pré ou Controle da Oi"
      type="text"
      placeholder="( 00 ) 00000.0000"
      name="msisdn"
      v-model="form.msisdn"
      @input="validate('msisdn', form.msisdn)"
      :error="this.errors.msisdn ? 'O número informado é inválido' : null"
      validation="bail|required|msisdn|min:17,length|max:17,length"
      :validation-rules="{
        msisdn: ({ value }) => (this.form.msisdn = Masks.msisdn(value)),
      }"
      :validation-messages="{
        required: 'Campo obrigatório',
        msisdn: 'Preencha o campo corretamente',
        min: 'Preencha o campo corretamente',
        max: 'Preencha o campo corretamente',
      }"
    />
  </FormulateForm>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
