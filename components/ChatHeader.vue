<template>
  <div class="fixed z-50 w-full flex">
    <div :style="`min-width: ${openSidebar ? '280px' : '0px'}; width: ${openSidebar ? '25%' : '0px'}; transition: .1s;`"></div>
    <ChatSidebar />
    <div class="ChatHeader px-4 gap-4 flex items-stretch flex-1">
      <div :style="openSidebar ? 'opacity: 0; pointer-events: none; width: 0px;' : ''" style="transition: .1s;">
        <el-button style="padding: 8px;" @click="openMenu = !openMenu">
          <MenuIcon />
        </el-button>
      </div>
      <HomeLink :style="openSidebar ? 'opacity: 0; pointer-events: none; width: 0px;' : ''" />
      <div class="flex-1 flex items-center justify-end gap-2"></div>
      <div class="flex-center gap-2">
        <el-button v-if="isLoggedIn" style="padding: 12px;" @click="logout" :loading="isLoading">
          {{ $t('auth.logout') }}
        </el-button>
        <NuxtLink v-else to="/login" :class="isLoading ? 'pointer-events-none' : ''">
          <el-button style="padding: 12px;" :loading="isLoading">
            {{ $t('auth.login') }}
          </el-button>
        </NuxtLink>
        <a href="https://discord.gg/5v49JKKmzJ" target="_blank">
          <el-button class="ChatHeaderDCJoinButton" style="padding: 12px;">
            <DiscordIconSvg style="height: 24px; width: 24px;" />
            <span class="ml-2 ChatHeaderDCJoinText">{{ $t('header.joinDc') }}</span>
          </el-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { openMenu, openSidebar } = useChat()
const { isLoggedIn, isLoading, logout } = useAuth()
openMenu.value = true
</script>

<style>
.ChatHeader {
  background: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color);
  min-height: 56px;
}
.ChatHeaderMenuButton i {
  transform: scale(1.25);
}
.ChatHeader > * {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .ChatHeaderDCJoinButton {
    padding: 12px 8px !important;
  }
  .ChatHeaderDCJoinText {
    display: none;
  }
}
</style>
