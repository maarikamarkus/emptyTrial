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
    width: 50px;
    height: 50px;
    font-size: 37px;
    border: none;
    border-radius: 100%;
    background-color: #fbfd8a;
    transition: box-shadow 0.65s ease;
}

.footer button:hover {
    box-shadow: 0px 0px 10px 2px #086972;
}

#addItem {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}
</style>