
<script setup lang='ts'>
</script>

<template>
    <div class="spinner">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<style scoped>
.spinner {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .lds-dual-ring {
        width: 80px;
        height: 80px;
        z-index: 2;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--vt-c-vue-green);
        border-color: var(--vt-c-vue-green) transparent var(--vt-c-vue-green) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>