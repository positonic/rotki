<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <ImportSource source="nexo">
    <template #upload-title>
      <i18n tag="span" path="import_data.nexo.import">
        <strong>{{ t('import_data.nexo.import_transactions') }}</strong>
      </i18n>
    </template>
    <i18n tag="span" path="import_data.note">
      <strong>{{ t('import_data.nexo.name') }}</strong>
    </i18n>
    <ul class="list-disc">
      <li>{{ t('import_data.nexo.line_one') }}</li>
    </ul>
  </ImportSource>
</template>
