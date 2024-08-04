<template>
    <div class="footer">
        <div class="footer-content">
            <p class="footer-credits">© 2024 - Sudershan Sridhar. All rights reserved.</p>
            <div class="social-links">
                <a href="https://github.com/sudershan29" target="_blank"><img src="../../assets/github.png" class="logo"/></a>
                <a href="https://linkedin.com/in/sudershan-sridhar" target="_blank"><img src="../../assets/linkedin.png" class="logo"/></a>
                <a href="mailto:sudershan.sridhar29@gmail.com" target="_blank"><img src="../../assets/gmail.png" class="logo"/></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background: #121212;
    color: #f4f4f4;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 0 auto;
    border-radius: 10px;
    margin: 3px;
}
.footer-content{
    display: flex;
    justify-content: space-between;
}
.logo{
    width: 35px;
    height: 35px;
}
.social-links{
    padding: 5px;
    display: flex;
    gap: 10px;
}
.footer-credits{
    font-size: 12px;
}
</style>