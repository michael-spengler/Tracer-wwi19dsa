<template>
  <datepicker-lite
      :id-attr="datepickerSetting.id"
      :name-attr="datepickerSetting.name"
      :class-attr="datepickerSetting.class"
      :value-attr="datepickerSetting.value"
      :locale="datepickerSetting.locale"
      :year-minus="datepickerSetting.yearMinus"
      @value-changed="datepickerSetting.changeEvent"
  ></datepicker-lite>
</template>

<script>
import DatepickerLite from "vue3-datepicker-lite";

export default {
name: "date_picker"
}
</script>

<style scoped>

</style>