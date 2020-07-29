<template>
    <div class="items">
        <ul v-for="item in sortedItems" :key="item.title">
            <div class="listRow" v-on:click="markDoneUndone(item.title)">
                <li :class="item.state ? 'checked' : ''">{{item.title}}</li>
                <div :class="item.state ? 'checkBubble checked' : 'checkBubble'"></div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"],

    data() {
        return {
            
        }
    },

    methods: {
        markDoneUndone(title) {
            let item = this.items.find(x => x.title === title);
            item.state = !item.state;
        }
    },

    computed: {
        sortedItems() {
            return this.items.concat().sort((a, b) => {
                if (!a.state && b.state) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }
    }
}
</script>

<style>
.listRow {
    cursor: pointer;
}

.items ul li {
    color: black;
    list-style: none;
    display: inline;
}

.items .checked {
    text-decoration: line-through;
    color: grey;
}

.checkBubble {
    border:1px solid black;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    display: inline-block;
    right: 10%;
    position: fixed;
    transition: all 0.75s ease;
}

.items .checkBubble.checked{
    background-color: cornflowerblue;
    border-color: cornflowerblue;
}

</style>