<template>
    <div class="header">
        <div class="header-content">
            <div class="logo">
                <img id="website-logo" alt="Vue logo" src="../../assets/sudershan-sridhar-2.jpeg">
            </div>

            <!-- All links -->
            <nav class="desktop-nav">
                <RouterLink class="router-link" to="/">Home</RouterLink>
                <RouterLink class="router-link" to="/photos">Photos</RouterLink>
                <RouterLink class="router-link" to="/project">Projects</RouterLink>
                <RouterLink class="router-link" to="/profile">Profile</RouterLink>
                <RouterLink class="router-link" to="/interests">Interests</RouterLink>
                <RouterLink class="router-link" to="/random">Random</RouterLink>
            </nav>

            <!-- Mobile nav -->
            <div class="mobile-nav">
                <div class="sandwich" @click="toggleSidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <!--  Sidebar -->
        <!-- TODO: Fix autoclose of the sidebar -->
        <div v-if="showSidebar" class="sidebar" v-on:blur="toggleSidebar">
            <RouterLink class="router-link" to="/">Home</RouterLink>
            <RouterLink class="router-link" to="/photos">Photos</RouterLink>
            <RouterLink class="router-link" to="/project">Projects</RouterLink>
            <RouterLink class="router-link" to="/profile">Profile</RouterLink>
            <RouterLink class="router-link" to="/interests">Interests</RouterLink>
            <RouterLink class="router-link" to="/random">Random</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSidebar: false
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    }
}
</script>

<style scoped>
.header {
    background: #121212;
    color: #f4f4f4;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
    margin: 3px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 60px;
}

.desktop-nav {
    display: flex;
    gap: 10px;
}

.mobile-nav {
    display: none;
}

.sandwich {
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    background-color: #f4f4f4;
}

.sandwich span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #121212;
    transition: all 0.3s ease;
}

.sandwich span:nth-child(1) {
    top: 0;
}

.sandwich span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.sandwich span:nth-child(3) {
    bottom: 0;
}

.sidebar {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: fixed;
    right: 0;
    top: 0;
    width: 250px;
    height: 100%;
    background: #121212;
    color: #f4f4f4;
    box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.1);
    transition: all 1s ease;
    display: flex;
}

@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: block;
    }
}

#website-logo {
    width: 50px;
    height: 50px;
    margin: 10px;
}

.router-link {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    color: #f4f4f4;
}
</style>

