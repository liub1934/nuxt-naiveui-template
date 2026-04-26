<template>
  <div class="theme-colors">
    <div class="flex items-center">
      <span>Theme Colors：</span>
      <n-space align="center">
        <n-color-picker
          v-for="name in colorTypes"
          :key="name"
          v-model:value="themeConfig[name]"
          :show-alpha="false"
        >
          <template #trigger="{ value, onClick, ref: triggerRef }">
            <div
              :ref="triggerRef"
              class="rounded-full size-22 cursor-pointer shadow"
              :style="{
                backgroundColor: value!,
              }"
              @click="onClick"
            />
          </template>
        </n-color-picker>
        <n-button
          type="primary"
          size="small"
          @click="resetThemeConfig"
        >
          Reset Theme
        </n-button>
      </n-space>
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="type in colorTypes"
        :key="type"
        class="w-1/3 md:w-1/5"
      >
        <div
          v-for="(color, i) in themeColors[type]"
          :key="color"

          :class="{
            'font-bold': i === 5,
          }"
          :style="{
            color,
          }"
        >
          {{ i + 1 }}: {{ color }}
        </div>
      </div>
    </div>
    <n-space>
      <span class="text-primary">Primary Color</span>
      <span class="text-info">Info Color</span>
      <span class="text-success">Success Color</span>
      <span class="text-warning">Warning Color</span>
      <span class="text-error">Error Color</span>
    </n-space>
    <n-space>
      <span class="text-primary-3">Primary Color 3</span>
      <span class="text-info-3">Info Color 3</span>
      <span class="text-success-3">Success Color 3</span>
      <span class="text-warning-3">Warning Color 3</span>
      <span class="text-error-3">Error Color 3</span>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
const { themeConfig, themeColors, resetThemeConfig } = useTheme()
const colorTypes = computed(
  () => Object.keys(themeConfig.value) as NTheme.ColorType[],
)
</script>
