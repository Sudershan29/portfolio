<template>
    <div class="footer">
        <div class="footer-content">
            <p class="footer-credits">© 2024 - Sudershan Sridhar. All rights reserved.</p>
            <div class="social-links">
                <a v-if:="$store.getters.isWorkMode" href="https://github.com/sudershan29" target="_blank"><img src="@/assets/github.png" class="logo"/></a>
                <a v-if:="$store.getters.isNotWorkMode" href="https://www.instagram.com/have_you_met_sudu/" target="_blank">
                    <img src="@/assets/instagram.png" class="logo"/>
                </a>
                <a href="https://linkedin.com/in/sudershan-sridhar" target="_blank"><img src="@/assets/linkedin.png" class="logo"/></a>
                <a href="mailto:sudershan.sridhar29@gmail.com" target="_blank"><img src="@/assets/gmail.png" class="logo"/></a>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.footer
    background: var(--color-background-primary)
    color: var(--color-text-primary)
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1)
    padding: 10px
    margin: 0 auto
    border-radius: 10px
    margin: 3px

    &-content
        display: flex
        justify-content: space-between

    &-credits
        font-size: 12px
        padding-top: 15px
        padding-left: 5px

.logo
    width: 35px
    height: 35px

.social-links
    padding: 5px
    display: flex
    gap: 10px
</style>