<template>
  <div class="mx-auto p-20 max-w-800 md:p-40">
    <n-space vertical>
      <ThemeColors />
      <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary">
          Tertiary
        </n-button>
        <n-button type="primary">
          Primary
        </n-button>
        <n-button type="info">
          Info
        </n-button>
        <n-button type="success">
          Success
        </n-button>
        <n-button type="warning">
          Warning
        </n-button>
        <n-button type="error">
          Error
        </n-button>
      </n-space>

      <n-space align="center">
        Notification：
        <n-button @click="notify('info')">
          Info
        </n-button>
        <n-button @click="notify('success')">
          Success
        </n-button>
        <n-button @click="notify('warning')">
          Warning
        </n-button>
        <n-button @click="notify('error')">
          Error
        </n-button>
      </n-space>

      <n-space align="center">
        Dialog：
        <n-button @click="handleConfirm">
          Confirm
        </n-button>
        <n-button @click="handleSuccess">
          Success
        </n-button>
        <n-button @click="handleError">
          Error
        </n-button>
      </n-space>

      <n-space align="center">
        Loading Bar：
        <n-button @click="handleLoadingBarStart">
          start
        </n-button>
        <n-button :disabled="loadingBarDisabled" @click="handleLoadingBarFinish">
          finish
        </n-button>
        <n-button @click="handleLoadingBarError">
          error
        </n-button>
      </n-space>

      <n-space vertical>
        <n-input v-model:value="value" type="text" />
      </n-space>

      <n-space>
        <n-radio
          :checked="checkedValue === 'Definitely Maybe'"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
        >
          Definitely Maybe
        </n-radio>
        <n-radio
          :checked="checkedValue === 'Be Here Now'"
          value="Be Here Now"
          name="basic-demo"
          @change="handleChange"
        >
          Be Here Now
        </n-radio>
        <n-radio
          :checked="checkedValue === 'Be Here Now'"
          value="Be Here Now"
          :disabled="disabled"
          name="basic-demo"
          label=" Be Here Now"
          @change="handleChange"
        />
        <n-switch v-model:value="disabled" />
      </n-space>

      <n-space vertical>
        <n-slider v-model:value="numberValue" :step="10" />
        <n-input-number v-model:value="numberValue" size="small" />
      </n-space>

      <n-date-picker v-model:value="timestamp" type="date" />

      <n-space vertical :size="12">
        <n-alert title="Info Text" type="info">
          Gee it's good to be back home
        </n-alert>
        <n-alert title="Success Text" type="success">
          Leave it till tomorrow to unpack my case
        </n-alert>
        <n-alert title="Warning Text" type="warning">
          Honey disconnect the phone
        </n-alert>
        <n-alert title="Error Text" type="error">
          I'm back in the U.S.S.R.
        </n-alert>
      </n-space>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import type { NotificationType } from 'naive-ui'
import { useDialog, useNotification } from 'naive-ui'

const value = ref('')
const numberValue = ref(50)
const checkedValueRef = ref<string | null>(null)
const disabled = ref(true)
const checkedValue = checkedValueRef
const timestamp = ref(1183135260000)
const loadingBarDisabled = ref(true)

function handleChange(e: Event) {
  checkedValueRef.value = (e.target as HTMLInputElement).value
}

const notification = useNotification()

function notify(type: NotificationType) {
  notification[type]({
    content: 'What to say?',
    meta: 'I don\'t know',
    duration: 2500,
    keepAliveOnHover: true,
  })
}

const dialog = useDialog()

function handleConfirm() {
  dialog.warning({
    title: 'Confirm',
    content: 'Are you sure?',
    positiveText: 'Sure',
    negativeText: 'Not Sure',
    draggable: true,
    onPositiveClick: () => {
      window.$message.success('Sure')
    },
    onNegativeClick: () => {
      window.$message.error('Not Sure')
    },
  })
}

function handleSuccess() {
  dialog.success({
    title: 'Success',
    content: 'Cool',
    positiveText: 'Wow!',
    onPositiveClick: () => {
      window.$message.success('Great!')
    },
  })
}

function handleError() {
  dialog.error({
    title: 'Error',
    content: 'A mistake.',
    positiveText: 'Ahhh!',
    onPositiveClick: () => {
      window.$message.error('I knew it...')
    },
  })
}

function handleLoadingBarStart() {
  window.$loadingBar.start()
  loadingBarDisabled.value = false
}

function handleLoadingBarFinish() {
  window.$loadingBar.finish()
  loadingBarDisabled.value = true
}

function handleLoadingBarError() {
  loadingBarDisabled.value = true
  window.$loadingBar.error()
}
</script>
