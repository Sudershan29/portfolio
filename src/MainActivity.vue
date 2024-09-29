<template>
    <div class="activity-body">
        <h1>Activity</h1>
    </div>
</template>

<script>
export default {
    name: 'MainActivity',
    components: {

    }
}
</script>


<style scoped lang="sass">
.activity-body
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  background: var(--color-background-primary)
  color: var(--color-text-primary)
  font-size: 2rem
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 2px
  border-radius: 10px
  margin: 3px
</style>