<template>
  <div class="field">
    <label v-if="lang && topLabel" for="name">{{ `${$t(label)} ${$t("in")} ${$t(lang)}` }}</label>
    <label v-else-if="topLabel" for="name">{{ `${$t(label)}` }}</label>
    <span :class="{'p-input-icon-left w-full':icon}">
      <i v-if="icon" :class="icon"/>
    <InputText
        :id="name"
        :aria-describedby="`${name}-help`"
        :autocomplete="`new-${name}`"
        :class="{ 'p-invalid': errorMessage }"
        :placeholder="$t(placeHolder)"
        :type="type"
        :value="modelValue"
        class="w-full"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    </span>

    <div class="fv-plugins-message-container">
      <div class="fv-help-block">
        <p :id="`${name}-help`" class="p-error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {useField} from 'vee-validate';

export default defineComponent({
  props: {
    topLabel:{},
    icon: {
      type: String
    },
    name: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {}
  },
  setup(props) {
    const {errorMessage} = useField(props.name);
    return {
      errorMessage,
    }
  },
  computed: {
    placeHolder() {
      if (this.lang) {
        return `${this.$t(this.label)} ${this.$t("in")} ${this.$t(this.lang)}`
      }

      return this.$t(this.label)

    }
  }
})


</script>

<style lang="postcss" scoped>
.field * {
  display: block;
}
</style>
