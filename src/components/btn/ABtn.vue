<script lang="ts" setup>
import { btnSlots } from './slots';

defineSlots<typeof btnSlots>()
</script>

<template>
    <button>
        <slot name="unknown"></slot>
        <div class="btn-content">
            <slot></slot>
        </div>
        <slot name="append"></slot>
    </button>
</template>