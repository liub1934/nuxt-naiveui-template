<template>
  <NaiveConfig
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NaiveNotification />
            <NuxtLayout>
              <NuxtPage keepalive />
            </NuxtLayout>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NaiveConfig>
</template>

<script setup lang="ts">
const { theme, themeOverrides, cssVarColors } = useTheme()

useHead(() => ({
  htmlAttrs: {
    style: {
      ...cssVarColors.value,
    },
  },
}))
</script>
