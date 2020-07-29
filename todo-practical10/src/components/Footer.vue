<template>
    <div class="footer">
        <button v-on:click="showAddItem()" 
            :class="buttonClasses">+</button>
        <input v-model="newItem" 
            type="text" 
            id="addItem" 
            :class="fieldClasses"
            @keypress.enter="addItem()"
            ref="inputField">
    </div>
</template>

<script>
export default {
    props: ["items"],

    data() {
        return {
            newItem: "",
            fieldClasses: "hidden",
            buttonClasses: ""
        }
    },
    
    methods: {
        showAddItem() {
            this.fieldClasses = "";
            this.buttonClasses = "hidden";
            this.$nextTick(() => this.$refs.inputField.focus());
        },

        addItem() {
            this.fieldClasses = "hidden";
            this.buttonClasses = "";
            if (this.newItem !== "") {
                this.items.push({title: this.newItem, state: false});
            }
            this.newItem = "";
        }
    } 

}
</script>

<style>
.footer {
    text-align: center;
}

.hidden {
    display: none;
}

.footer button {
    cursor: pointer;
}
</style>