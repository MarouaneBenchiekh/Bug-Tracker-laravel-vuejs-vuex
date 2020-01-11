<template>
    <section class="content">
        <div class="container-fluid">
            <div class="form-group">
                <label>Select</label>
                <select>
                    <option value="">Select user</option>
                    <option v-for="user in getAllUser" :value="user.id">
                        {{ user.name }}
                    </option>
                </select>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "List",

    mounted() {
        this.$store.dispatch("allUserFromDatabase");
    },
    computed: {
        getAllUser() {
            //final output from here
            return this.$store.getters.getUserFromGetters;
        }
    }
};
</script>

<style scoped></style>
