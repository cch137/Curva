<template>
  <ClientOnly>
    <el-select
      v-model="i18n.locale"
      placeholder="Select"
      @change="(value) => i18n.locale = value"
      :size="_size"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </ClientOnly>
</template>

<script setup>
const i18n = useLocale()

const options = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: '繁體中文',
    value: 'zh-TW'
  },
  {
    label: 'Русский',
    value: 'ru'
  },
  {
    label: 'Español',
    value: 'es'
  },
]
</script>

<script>
export default {
  props: ['size'],
  data () {
    return {}
  },
  computed: {
    _size () {
      return this.size || ''
    }
  }
}
</script>
