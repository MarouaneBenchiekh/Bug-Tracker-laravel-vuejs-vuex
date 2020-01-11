<template>
    <section class="content">
        <div class="container-fluid">
            <div class="form-group">
                <label>Select</label>
                <select>
                    <option value="">Select Project</option>
                </select>
            </div>
        </div>
        <input v-model="form.name" type="text" name="projectName" />
    </section>
</template>

<script>
import { Form, HasError, AlertError } from "vform";

export default {
    data() {
        return {
            form: new Form({
                name: ""
            })
        };
    },
    name: "List",

    mounted() {
        this.$store.dispatch("getCurrentUser");
        // this.$store.dispatch("allProjectFromDatabase");
    },
    computed: {
        getAllProject() {
            //final output from here
            return this.$store.getters.getProjectFromGetters;
        },
        addProject() {
            this.$store.dispatch("addProject", this.form);
        }
    }
};
</script>

<style scoped></style>
