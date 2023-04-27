<template>
<section id="subscription" class="py-5">
            <div class="container py-5">
                <form class="py-5 text-center">
                    <div class="pt-5">
                        <input type="text" name="first-name" id="first-name" placeholder="First Name">
                        <input type="text" name="last-name" id="last-name" placeholder="Last Name">
                        <input type="text" name="email-address" id="email-address" placeholder="Email Address">
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
</template>

<script>
    export default {
        name: 'SubscriptionForm'
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;

    #subscription {
        div {
            background-image: url('/imgs/assets/form-bg-1.png');
            background-repeat: no-repeat;
            background-size: cover;

            input{
                background-color: $my-contrast;
                border: 1px solid $my-tertiary;
                padding: 15px 30px;
                border-radius: 30px;
                margin-left: 2rem;
            }
            ::placeholder, button{
                color: $my-tertiary;
                font-size: 1.2rem;
            }
            button {
                background-color: $my-primary;
                padding: 15px 30px;
                border-radius: 30px;
                margin-top: 2rem;
            }
        }
    }
</style>