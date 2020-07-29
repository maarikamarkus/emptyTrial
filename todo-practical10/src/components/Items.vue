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
    padding: 5px;
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
    border:1px solid #086972;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    display: inline-block;
    float: right;
    transition: all 0.75s ease;
}

.checkBubble:hover {
    box-shadow: 0px 0px 10px 2px #086972;
}

.items .checkBubble.checked{
    background-color: #87dfd6;
    border-color: #87dfd6;
}

</style>